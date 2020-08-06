import React from 'react';
import styled from 'styled-components'

import CardContainer from '../components/ui/card-container';
import Card from '../components/ui/card';
import Layout from '../components/layout';
import SEO from '../components/seo';

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

const Projects = () => {
  return (
    <Layout>
      <SEO title='Projects' />
      <CardContainer>
        <Card>
          <h3>The Weather</h3>
          <ProjectImg src="https://i.imgur.com/2M7oJwY.png" />
          <ProjectLinks>
            <a href="https://weather.scottosmith.net/" target="_blank" rel="noreferrer">Website</a> |
            <a href="https://github.com/scottosmith/the-weather" target="_blank" rel="noreferrer">Github</a>
          </ProjectLinks>
          <ProjectText>
            Using React, CSS modules, and the OpenWeatherMap API, I made a basic weather app. 
            This was fun because I've always wanted to make a custom weather app. I have plans to 
            adapt this to my flying and hiking needs, to show the specific information I'm always 
            looking for without all the excess.
          </ProjectText>
        </Card>
        <Card>
          <h3>Project 2</h3>
        </Card>
        <Card>
          <h3>Project 3</h3>
        </Card>
        <Card>
          <h3>Project 4</h3>
        </Card>
      </CardContainer>
    </Layout>
  );
};

export default Projects;
