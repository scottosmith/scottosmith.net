import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import SiteNav from './site-nav';
import Backdrop from '../backdrop';

const SideMenu = styled.div`
  position: fixed;
  width: 120px;
  max-width: 70%;
  height: 225px;
  right: 0;
  top: 0;
  z-index: 200;
  background-color: var(--bg-color);
  padding: 32px 16px;
  box-sizing: border-box;
  transition: transform 0.2s ease-out;
  border-radius: 0 0 0 24px;

  @media (min-width: 768px) {
    display: none;
  }

  &.open {
    transform: translate(0, 0);
  }

  &.closed {
    transform: translate(100%, -50%);
  }
`;

const MobileSiteNav = props => {
  return (
    <>
      <Backdrop show={props.show} clicked={props.closed} />
      <SideMenu className={props.show ? 'open' : 'closed'}>
        <SiteNav itemClicked={props.closed} show={props.show} />
      </SideMenu>
    </>
  );
};

MobileSiteNav.propTypes = {
  show: PropTypes.bool,
  closed: PropTypes.func,
};

MobileSiteNav.defaultProps = {
  show: 'false',
};

export default MobileSiteNav;
