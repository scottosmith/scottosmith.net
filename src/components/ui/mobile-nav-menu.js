import React from 'react';
import styled from 'styled-components';

import SiteNavContainer from './site-nav-container';
import SiteNavItem from './site-nav-item';
import Backdrop from './backdrop';

const SideMenu = styled.div`
  position: fixed;
  width: 280px;
  max-width: 70%;
  height: 100%;
  right: 0;
  top: 0;
  z-index: 200;
  background-color: var(--bg-color);
  padding: 32px 16px;
  box-sizing: border-box;
  transition: transform 0.3s ease-out;

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

const MobileNavMenu = (props) => {
  return (
    <>
      <Backdrop show={props.show} clicked={props.closed} />
      <SideMenu className={props.show ? 'open' : 'closed'}>
        <SiteNavContainer>
          <SiteNavItem fade duration={.4} to="/about-me" show={props.show}>About Me</SiteNavItem>
          <SiteNavItem fade duration={.4} to="/projects" show={props.show}>Projects</SiteNavItem>
        </SiteNavContainer>
      </SideMenu>
    </>
  );
};

export default MobileNavMenu;