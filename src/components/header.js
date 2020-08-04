import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import SiteNavContainer from '../components/ui/site-nav-container';
import SiteNavItem from '../components/ui/site-nav-item';

const SiteHeader = styled.div`
  margin-bottom: 1rem;
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-content: center;
  align-items: baseline;
`;

const SiteTitle = styled.h1`
  margin: 0;
`;

const SiteTitleLink = styled(Link)`
  text-decoration: none;
  font-size: .75em;

  @media(min-width: 768px) {
    font-size: 1em;
  }

  :hover {
    text-decoration: none;
  }
`;

const Header = ({ siteTitle }) => {
  return (
    <>
      <SiteHeader>
        <SiteTitle>
          <SiteTitleLink to="/">
            {siteTitle}
          </SiteTitleLink>
        </SiteTitle>
        <SiteNavContainer>
          <SiteNavItem to="/about-me">About Me</SiteNavItem>
          <SiteNavItem to="/projects">Projects</SiteNavItem>
        </SiteNavContainer>
      </SiteHeader>
    </>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
}

export default Header;
