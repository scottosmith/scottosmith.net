import React from 'react';

import CardContainer from '../components/ui/cards/card-container';
import Card from '../components/ui/cards/card';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Project from '../components/ui/project';
import ExLink from '../components/ui/ex-link';

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
            Using <ExLink url="https://reactjs.org">React</ExLink>,&nbsp; 
            <ExLink url="https://github.com/css-modules/css-modules">CSS modules</ExLink>, 
            and the <ExLink url="https://openweathermap.org/api">OpenWeatherMap API</ExLink>, 
            I made a basic weather app. This was fun because I've always wanted to make a custom weather app. I have 
            plans to adapt this to my flying and hiking needs, to show the specific information I'm always looking 
            for without having to weed through all the excess. I use <ExLink url="https://www.netlify.com/">Netlify</ExLink> to build/deploy/host this project.
          </Project>
        </Card>
        <Card>
          <Project 
          title="Photo Blog Front End" 
          imgUrl="https://i.imgur.com/Imtllb5.png"
          githubUrl="https://github.com/scottosmith/sosweb-frontend">
            I have been slowly working on a blog to showcase my photography, building each piece of the stack myself: front-end, API, 
            database, and server. The front-end is built with React, starting with an out-of-the-box <ExLink url="https://github.com/facebook/create-react-app">create-react-app</ExLink> instance 
            and using <ExLink url="https://sass-lang.com/">Sass</ExLink>, one my favorite CSS 
            tools ever. Sass makes stylesheets much easier to build and maintain. The syntax just makes sense. Not publicly available 
            quite yet, but soon. I've got photos I want to share that are stacking up!
          </Project>
        </Card>
        <Card>
          <Project 
          title="Photo Blog Back End" 
          githubUrl="https://github.com/scottosmith/sosweb-api">
            To learn some new back end skills and keep the "full stack" part of my title current, I built a <ExLink url="https://graphql.org/">GraphQL</ExLink> API 
            for my blog, powered by a <ExLink url="https://www.mongodb.com/">MongoDB</ExLink> database. The more I read about GraphQL and NoSQL DBs, the more I 
            wanted to build with them so I could understand them better and experience the differences from other tech I've worked with like REST APIs and SQL DBs.
          </Project>
        </Card>
        <Card>
          <Project 
          title="scottosmith.net" 
          websiteUrl="https://scottosmith.net/" 
          githubUrl="https://github.com/scottosmith/scottosmith.net">
            Using the <ExLink url="https://github.com/gatsbyjs/gatsby-starter-default">Gatsby default starter</ExLink>, I built my portfolio/personal website 
            using <ExLink url="https://styled-components.com/">Styled Components</ExLink>, something I am THOROUGHLY enjoying using. 
            This <ExLink url="https://jamstack.org/">Jamstack</ExLink> site is continuously deployed and hosted by&nbsp;
            <ExLink url="https://www.netlify.com/">Netlify</ExLink>. 
          </Project>
        </Card>
      </CardContainer>
    </Layout>
  );
};

export default Projects;
