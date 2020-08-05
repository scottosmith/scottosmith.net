import styled from 'styled-components';
import AniLink from "gatsby-plugin-transition-link/AniLink"

const SiteNavItem = styled(AniLink)`
  font-size: 1.1em;
  margin-left: 1em;

  @media(min-width: 768px) {
    font-size: 1.2em;
  }
`;

export default SiteNavItem;