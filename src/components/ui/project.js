import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ProjectText = styled.p`
  font-size: .9em;

  @media (min-width: 768px) {
    font-size: 1em;
  }
`;

const ProjectImg = styled.img`
  display: block;
  max-width: 80%;
  margin: 1em auto;
  border: 1.5px solid var(--img-border);
`;

const ProjectLinks = styled.div`
  font-size: .9em;
  margin: .75em 0;
  display: flex;
  justify-content: space-between;
  width: 7em;

  @media (min-width: 768px) {
    font-size: 1em;
    margin: 1em 0;
  }
`;

const Project = props => {
  return (
    <>
      <h3>{props.title}</h3>
      {props.imgUrl ? <ProjectImg src={props.imgUrl} /> : null}
      <ProjectLinks>
        <a href={props.websiteUrl} target="_blank" rel="noreferrer">Website</a> |
        <a href={props.githubUrl} target="_blank" rel="noreferrer">Github</a>
      </ProjectLinks>
      <ProjectText>
        {props.children}
      </ProjectText>
    </>
  );
};

Project.propTypes = {
  title: PropTypes.string.isRequired,
  imgUrl: PropTypes.string,
  websiteUrl: PropTypes.string.isRequired,
  githubUrl: PropTypes.string.isRequired
}

export default Project;
