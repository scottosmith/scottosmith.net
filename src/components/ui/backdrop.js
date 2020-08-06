import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Overlay = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
`; 

const Backdrop = (props) => (
  props.show 
  ? <Overlay 
      onClick={props.clicked} />
  : null
);

Backdrop.propTypes = {
  show: PropTypes.bool,
  clicked: PropTypes.func
}

Backdrop.defaultProps = {
  show: false
}

export default Backdrop;