import styled from 'styled-components';

const CardContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-content: center;
  align-items: center;

  @media(min-width: 768px) {
    flex-flow: row wrap;
  }
`;

export default CardContainer;