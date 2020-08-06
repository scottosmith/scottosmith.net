import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import SiteNavContainer from './site-nav-container';
import SiteNavItem from './site-nav-item';
import Backdrop from './backdrop';

const SideMenu = styled.div`
  position: fixed;
  width: 160px;
  max-width: 70%;
  height: 100%;
  right: 0;
  top: 0;
  z-index: 200;
  background-color: var(--bg-color);
  padding: 32px 16px;
  box-sizing: border-box;
  transition: transform 0.2s ease-out;

  @media(min-width: 768px) {
    display: none;
  }

  &.open {
    transform: translateX(0);
  }

  &.closed {
    transform: translateX(100%);
  }
`;

const MobileNavMenu = props => {
  return (
    <>
      <Backdrop show={props.show} clicked={props.closed} />
      <SideMenu className={props.show ? 'open' : 'closed'}>
        <SiteNavContainer>
          <SiteNavItem fade duration={.4} to="/about-me" show={props.show.toString()}>About Me</SiteNavItem>
          <SiteNavItem fade duration={.4} to="/projects" show={props.show.toString()}>Projects</SiteNavItem>
        </SiteNavContainer>
      </SideMenu>
    </>
  );
};

MobileNavMenu.propTypes = {
  show: PropTypes.bool,
  closed: PropTypes.func
}

MobileNavMenu.defaultProps = {
  show: 'false'
}

export default MobileNavMenu;