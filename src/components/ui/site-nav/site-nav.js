import React from 'react';
import PropTypes from 'prop-types';

import SiteNavContainer from './site-nav-container';
import SiteNavItem from './site-nav-item';

const SiteNav = props => (
  <SiteNavContainer>
    <SiteNavItem
      fade
      duration={0.4}
      to="/about-me"
      show={props.show.toString()}
      onClick={props.itemClicked}
    >
      About Me
    </SiteNavItem>
    <SiteNavItem
      fade
      duration={0.4}
      to="/projects"
      show={props.show.toString()}
      onClick={props.itemClicked}
    >
      Projects
    </SiteNavItem>
    <SiteNavItem
      href="https://blog.scottosmith.net"
      target="_blank"
      rel="noreferrer"
      show={props.show.toString()}
      onClick={props.itemClicked}
    >
      Blog
    </SiteNavItem>
    <SiteNavItem
      href="https://drive.google.com/file/d/1I-ybvpgVx-4JwiT5jgsOLEGandAfTGDt/view?usp=sharing"
      target="_blank"
      rel="noreferrer"
      show={props.show.toString()}
      onClick={props.itemClicked}
    >
      Resume
    </SiteNavItem>
  </SiteNavContainer>
);

SiteNav.propTypes = {
  show: PropTypes.string,
};

SiteNav.defaultProps = {
  show: 'false',
};

export default SiteNav;
