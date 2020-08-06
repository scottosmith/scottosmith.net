import styled from 'styled-components';
import AniLink from "gatsby-plugin-transition-link/AniLink"
import PropTypes from 'prop-types';

const SiteNavItem = styled(AniLink)`
  display: ${props => props.show ? 'block' : 'none'};
  font-size: 1.5em;
  margin: .5em 0;

  @media(min-width: 768px) {
    display: block;
    font-size: 1.2em;
    margin-left: 1em;
    text-shadow: .5px .5px #787878;
  }
`;

SiteNavItem.propTypes = {
  show: PropTypes.bool
}

SiteNavItem.defaultProps = {
  show: 'false'
}

export default SiteNavItem;