import styled from 'styled-components';
import PropTypes from 'prop-types';

const Card = styled.div`
  background: ${props => props.primary ? 'var(--main-color)' : 'transparent'};
  color: ${props => props.primary ? 'var(--link-color)' : 'var(--main-color)'};
  font-size: 1.2em;
  padding: 1.5em;
  border: 2px solid var(--main-color);
  border-radius: 24px 4px; 
  min-height: 10em;
  margin: 5px;
  margin-bottom: .75em;
  width: 100%;

  @media(min-width: 768px) {
    margin-bottom: 1em;
  }

`;

Card.propTypes = {
  primary: PropTypes.bool,
}

Card.defaultProps = {
  primary: false,
}

export default Card;
