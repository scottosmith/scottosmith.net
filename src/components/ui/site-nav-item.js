import styled from 'styled-components';
import { Link } from 'gatsby';

const SiteNavItem = styled(Link)`
  font-size: 1.1em;
  margin-left: 1em;

  @media(min-width: 768px) {
    font-size: 1.2em;
  }
`;

export default SiteNavItem;