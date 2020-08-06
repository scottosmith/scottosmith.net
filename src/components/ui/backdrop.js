import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Overlay = styled.div`
  position: fixed;
  z-index: 100;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
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
