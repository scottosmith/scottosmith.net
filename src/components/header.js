import AniLink from "gatsby-plugin-transition-link/AniLink"
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styled from 'styled-components';

import SiteNavContainer from '../components/ui/site-nav-container';
import SiteNavItem from '../components/ui/site-nav-item';
import Backdrop from './ui/backdrop';

const SiteHeader = styled.div`
  margin-bottom: 1rem;
  margin: 0 auto;
  padding: 1.45rem 1.0875rem;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-content: center;
  align-items: center;
`;

const SiteTitle = styled.h1`
  margin: 0;
`;

const SiteTitleLink = styled(AniLink)`
  text-decoration: none;
  font-size: .75em;
  text-shadow: 1px 1px #787878;

  @media(min-width: 768px) {
    font-size: 1em;
  }

  :hover {
    text-decoration: none;
  }
`;

const MobileNavMenu = styled.a`
  display: inline;
  color: var(--link-color);
  fill: currentColor;

  @media(min-width: 768px) {
    display: none;
  }
`;

class Header extends Component {
  state = {
    showMobileNav: false
  }

  showMobileNavMenuHandler = () => {
    this.setState(prevState => {
      return { showMobileNav: !prevState.showMobileNav };
    });
  };

  render() {  
    return (
      <>
        <Backdrop show={this.state.showMobileNav} clicked={this.showMobileNavMenuHandler} />
        <SiteHeader>
          <SiteTitle>
            <SiteTitleLink fade duration={.4} to="/">
              {this.props.siteTitle}
            </SiteTitleLink>
          </SiteTitle>
          <SiteNavContainer>
            <SiteNavItem fade duration={.4} to="/about-me">About Me</SiteNavItem>
            <SiteNavItem fade duration={.4} to="/projects">Projects</SiteNavItem>
            <MobileNavMenu onClick={this.showMobileNavMenuHandler}>
              <svg viewBox="0 0 100 80" width="30" height="30">
                <rect width="100" height="5"></rect>
                <rect y="30" width="100" height="5"></rect>
                <rect y="60" width="100" height="5"></rect>
              </svg>
            </MobileNavMenu>
          </SiteNavContainer>
        </SiteHeader>
      </>
    );
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
}

export default Header;
