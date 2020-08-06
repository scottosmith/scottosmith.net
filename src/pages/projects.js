import React from 'react';

import CardContainer from '../components/ui/card-container';
import Card from '../components/ui/card';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Project from '../components/ui/project';

const Projects = () => {
  return (
    <Layout>
      <SEO title='Projects' />
      <CardContainer>
        <Card>
          <Project 
          title="The Weather" 
          imgUrl="https://i.imgur.com/2M7oJwY.png" 
          websiteUrl="https://weather.scottosmith.net/" 
          githubUrl="https://github.com/scottosmith/the-weather" >
            Using <a href="https://reactjs.org" target="_blank" rel="noreferrer">React</a>,&nbsp; 
            <a href="https://github.com/css-modules/css-modules" target="_blank" rel="noreferrer">CSS modules</a>, 
            and the <a href="https://openweathermap.org/api" target="_blank" rel="noreferrer">OpenWeatherMap API</a>, 
            I made a basic weather app. This was fun because I've always wanted to make a custom weather app. I have 
            plans to adapt this to my flying and hiking needs, to show the specific information I'm always looking 
            for without having to weed through all the excess.
          </Project>
        </Card>
        <Card>
        <Project 
          title="scottosmith.net" 
          websiteUrl="https://scottosmith.net/" 
          githubUrl="https://github.com/scottosmith/scottosmith.net" >
            Using the <a href="https://github.com/gatsbyjs/gatsby-starter-default" target="_blank" rel="noreferrer">Gatsby default starter</a>, I built my portfolio/personal website 
            using <a href="https://styled-components.com/" target="_blank" rel="noreferrer">Styled Components</a>, something I am THOROUGHLY enjoying using. 
            This <a href="https://jamstack.org/" target="_blank" rel="noreferrer">Jamstack</a> site is continuously deployed by&nbsp;
            <a href="https://buddy.works/" target="_blank" rel="noreferrer">Buddy</a> to my personal DigitalOcean droplet. 
          </Project>
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
