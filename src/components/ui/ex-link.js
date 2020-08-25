import React from 'react';

const ExLink = props => (
  <a href={props.url} target="_blank" rel="noreferrer">{props.children}</a>
);

export default ExLink;