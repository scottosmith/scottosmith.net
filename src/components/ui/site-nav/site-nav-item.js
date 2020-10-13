import styled from 'styled-components';
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import PropTypes from 'prop-types';

const SiteNavItem = styled(AniLink)`
  display: ${props => props.show === 'true' ? 'block' : 'none'};
  font-size: 1.2em;
  margin: .5em 0;
  height: 100%;

  @media(min-width: 768px) {
    display: block;
    font-size: 1.25em;
    margin: 0 0 0 1em;
    text-shadow: .5px .5px #787878;
  }
`;

SiteNavItem.propTypes = {
  // This has to be a string to prevent an error 
  // w/ using AniLink w/ styled-components
  show: PropTypes.string
}

SiteNavItem.defaultProps = {
  show: 'false'
}

export default SiteNavItem;
