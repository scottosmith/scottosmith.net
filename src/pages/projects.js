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
            Using React, CSS modules, and the OpenWeatherMap API, I made a basic weather app. 
            This was fun because I've always wanted to make a custom weather app. I have plans to 
            adapt this to my flying and hiking needs, to show the specific information I'm always 
            looking for without all the excess.
          </Project>
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
