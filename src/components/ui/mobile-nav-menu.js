import React from 'react';
// import styled from 'styled-components';

import Backdrop from './backdrop';

const MobileNavMenu = (props) => {
  return (
    <>
      <Backdrop show={props.show} clicked={props.closed} />
    </>
  );
};

export default MobileNavMenu;