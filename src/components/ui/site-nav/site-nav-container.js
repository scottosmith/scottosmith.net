import styled from 'styled-components';

const SiteNavContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  text-align: right;
  margin-right: 0;
  align-items: flex-end;
  height: 100%;

  @media(min-width: 768px) {
    display: flex;
    flex-flow: row nowrap;
  }
`;

export default SiteNavContainer;
