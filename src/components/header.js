import AniLink from 'gatsby-plugin-transition-link/AniLink'
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styled from 'styled-components';

import SiteNav from './ui/site-nav/site-nav';
import MobileSiteNav from './ui/site-nav/mobile-site-nav';

const SiteHeader = styled.div`
  margin: 0 auto;
  padding: .5rem 0;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-content: center;
  align-items: center;

  @media (min-width: 768px) {
    padding: 1.45rem 0;
  }
`;
const SiteTitle = styled.h1`
  margin-bottom: .3em;

  @media (min-width: 768px) {
    margin-bottom: 0;
  }
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
const MobileNavMenuToggle = styled.a`
  display: inline;
  color: var(--link-color);
  fill: currentColor;

  @media (min-width: 768px) {
    display: none;
  }
`;

class Header extends Component {
  state = {
    showMobileNavMenu: false
  }

  mobileNavMenuHandler = () => {
    this.setState(prevState => {
      return { showMobileNavMenu: !prevState.showMobileNavMenu };
    });
  };

  render() {  
    return (
      <>
        <MobileSiteNav show={this.state.showMobileNavMenu} closed={this.mobileNavMenuHandler} />
        <SiteHeader>
          <SiteTitle>
            <SiteTitleLink fade duration={.4} to="/">
              {this.props.siteTitle}
            </SiteTitleLink>
          </SiteTitle>
          <SiteNav />
          <MobileNavMenuToggle onClick={this.mobileNavMenuHandler}>
            <svg viewBox="0 0 100 80" width="30" height="30">
              <rect width="100" height="5"></rect>
              <rect y="30" width="100" height="5"></rect>
              <rect y="60" width="100" height="5"></rect>
            </svg>
          </MobileNavMenuToggle>
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
