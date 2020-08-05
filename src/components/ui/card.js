import styled from 'styled-components';
import PropTypes from 'prop-types';

const Card = styled.div`
  background: ${props => props.primary ? 'var(--main-color)' : 'transparent'};
  color: ${props => props.primary ? 'var(--link-color)' : 'var(--main-color)'};
  font-size: 1.2em;
  padding: 2em 1em;
  border: 2px solid var(--main-color);
  border-radius: 24px 4px; 
  min-height: 15em;
  margin: 5px;
  margin-bottom: .75em;
  width: 100%;

  @media(min-width: 768px) {
    flex: 1 1 0px;
    min-width: 250px;
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