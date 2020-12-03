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
import 'fontsource-source-sans-pro/400.css';
import 'fontsource-source-sans-pro/700.css';

import Header from './header';
import './layout.css';
import ExLink from '../components/ui/ex-link';

const SiteWrapper = styled.div`
  margin: 0 auto;
  max-width: var(--site-width);
  padding: 0 1.1rem 1.45rem;
`;

const SiteFooter = styled.footer`
  margin-top: 1em;
  font-weight: bold;
  text-shadow: 0.5px 0.5px #737373;
`;

const PaddedLink = styled.span`
  padding-left: 8px;
  font-weight: normal;
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
  `);

  return (
    <>
      <SiteWrapper>
        <Header siteTitle={data.site.siteMetadata.title} />
        <main>{children}</main>
        <SiteFooter>
          © {new Date().getFullYear()}{' '}
          <PaddedLink>
            <ExLink url="https://github.com/scottosmith">github</ExLink>
          </PaddedLink>{' '}
          <PaddedLink>
            <ExLink url="https://www.linkedin.com/in/sos314/">linkedin</ExLink>
          </PaddedLink>
        </SiteFooter>
      </SiteWrapper>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
