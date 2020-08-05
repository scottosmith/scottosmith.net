/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

import Header from './header'
import './layout.css';

const SiteWrapper = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 0 1.1rem 1.45rem;
`;

const SiteFooter = styled.footer`
  margin-top: 1em;
  font-weight: bold;
  text-shadow: 1px 1px #424242;
`;

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <SiteWrapper>
        <main>{children}</main>
        <SiteFooter>
          © {new Date().getFullYear()} 
        </SiteFooter>
      </SiteWrapper>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout;
