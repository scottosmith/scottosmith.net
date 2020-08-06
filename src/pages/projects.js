import React from 'react';
import styled from 'styled-components';

import CardContainer from '../components/ui/card-container';
import Card from '../components/ui/card';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Project from '../components/ui/project';

const Badge = styled.div`
  margin: .75em 0;
`;

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
          githubUrl="https://github.com/scottosmith/the-weather">
            <Badge><img src="https://app.buddy.works/scottosmith/the-weather/pipelines/pipeline/272198/badge.svg?token=d78b3e44e9a35af85b443334c5224074d02919b8f7c212acb04aff7ea29ff318" alt="" /></Badge>
            Using <a href="https://reactjs.org" target="_blank" rel="noreferrer">React</a>,&nbsp; 
            <a href="https://github.com/css-modules/css-modules" target="_blank" rel="noreferrer">CSS modules</a>, 
            and the <a href="https://openweathermap.org/api" target="_blank" rel="noreferrer">OpenWeatherMap API</a>, 
            I made a basic weather app. This was fun because I've always wanted to make a custom weather app. I have 
            plans to adapt this to my flying and hiking needs, to show the specific information I'm always looking 
            for without having to weed through all the excess. I use <a href="https://buddy.works/" target="_blank" rel="noreferrer">Buddy</a> as my CI/CD and host it on my personal <a href="https://www.digitalocean.com/" target="_blank" rel="noreferrer">DigitalOcean</a> droplet.
          </Project>
        </Card>
        <Card>
          <Project 
          title="Photo Blog Front End" 
          imgUrl="https://i.imgur.com/Imtllb5.png"
          githubUrl="https://github.com/scottosmith/sosweb-frontend">
            I have been slowly working on a blog to showcase my photography, building each piece of the stack myself: front-end, API, 
            database, and server. The front-end is built with React, starting with an out-of-the-box <a href="https://github.com/facebook/create-react-app" target="_blank" rel="noreferrer">create-react-app</a> instance 
            and using <a href="https://sass-lang.com/" target="_blank" rel="noreferrer">Sass</a>, one my favorite CSS 
            tools ever. Sass makes stylesheets much easier to build and maintain. The syntax just makes sense. Not publicly available 
            quite yet, but soon. I've got photos I want to share that are stacking up!
          </Project>
        </Card>
        <Card>
          <Project 
          title="Photo Blog Back End" 
          githubUrl="https://github.com/scottosmith/sosweb-api">
            To learn some new back end skills and keep the "full stack" part of my title current, I built a <a href="https://graphql.org/" target="_blank" rel="noreferrer">GraphQL</a> API 
            for my blog, powered by a <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer">MongoDB</a> database. The more I read about GraphQL and NoSQL DBs, the more I 
            wanted to build with them so I could understand them better and experience the differences from other tech I've worked with like REST APIs and SQL DBs.
          </Project>
        </Card>
        <Card>
          <Project 
          title="scottosmith.net" 
          websiteUrl="https://scottosmith.net/" 
          githubUrl="https://github.com/scottosmith/scottosmith.net">
            <Badge><img src="https://app.buddy.works/scottosmith/scottosmith-net/pipelines/pipeline/272191/badge.svg?token=d78b3e44e9a35af85b443334c5224074d02919b8f7c212acb04aff7ea29ff318" alt="" /></Badge>
            Using the <a href="https://github.com/gatsbyjs/gatsby-starter-default" target="_blank" rel="noreferrer">Gatsby default starter</a>, I built my portfolio/personal website 
            using <a href="https://styled-components.com/" target="_blank" rel="noreferrer">Styled Components</a>, something I am THOROUGHLY enjoying using. 
            This <a href="https://jamstack.org/" target="_blank" rel="noreferrer">Jamstack</a> site is continuously deployed by&nbsp;
            <a href="https://buddy.works/" target="_blank" rel="noreferrer">Buddy</a> to my personal <a href="https://www.digitalocean.com/" target="_blank" rel="noreferrer">DigitalOcean</a> droplet. 
          </Project>
        </Card>
      </CardContainer>
    </Layout>
  );
};

export default Projects;
