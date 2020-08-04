import styled from 'styled-components';
import PropTypes from 'prop-types';

const Card = styled.div`
  background: ${props => props.primary ? '#ef8354' : 'transparent'};
  color: ${props => props.primary ? 'inherit' : '#ef8354'};
  font-size: 1.2em;
  padding: 2em 1em;
  border: 2px solid #ef8354;
  border-radius: 24px 4px; 
  min-height: 15em;
  margin: 5px;
  margin-bottom: 1em;
  width: 100%;

  @media(min-width: 768px) {
    flex: 1 1 0px;
    min-width: 250px;
    margin-bottom: 2em;
  }

`;

Card.propTypes = {
  primary: PropTypes.bool,
}

Card.defaultProps = {
  primary: false,
}

export default Card;