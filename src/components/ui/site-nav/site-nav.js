import React from 'react';
import PropTypes from 'prop-types';

import SiteNavContainer from './site-nav-container';
import SiteNavItem from './site-nav-item';

const SiteNav = props => (
  <SiteNavContainer>
    <SiteNavItem fade duration={.4} to="/about-me" show={props.show.toString()}>About Me</SiteNavItem>
    <SiteNavItem fade duration={.4} to="/projects" show={props.show.toString()}>Projects</SiteNavItem>
    <SiteNavItem href="https://docs.google.com/document/d/1Fh2PoAmJKpbjjDKkW6PcoWVB-9NYbhKFDmPDztnm8LE/edit?usp=sharing" target="_blank" rel="noreferrer" show={props.show.toString()}>Resume</SiteNavItem>
  </SiteNavContainer>
);

SiteNav.propTypes = {
  show: PropTypes.string
}

SiteNav.defaultProps = {
  show: 'false'
}

export default SiteNav;