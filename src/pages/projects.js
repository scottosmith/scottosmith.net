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
      <SEO title="Projects" />
      <CardContainer>
        <p>
          All projects built, deployed, and hosted on{' '}
          <ExLink url="https://www.netlify.com/">Netlify</ExLink>.
        </p>
        <Card>
          <Project
            title="cList"
            imgUrl="https://i.imgur.com/be83l5y.png"
            websiteUrl="https://clist.scottosmith.net/"
            githubUrl="https://github.com/scottosmith/clist"
          >
            This is a project I decided to do to scratch a personal itch. I
            wanted an easy way to search through Craigslist and add items to
            different lists, sort of like a shopping list. I tend to compare ads
            when looking for certain things and this makes it easier to keep
            track of the different ones I'm interested in.{' '}
            <ExLink url="https://reactjs.org">React</ExLink> and{' '}
            <ExLink url="https://styled-components.com/">
              Styled Components
            </ExLink>{' '}
            for this one. This has been a fun project to work on!
          </Project>
        </Card>
        <Card>
          <Project
            title="The Weather"
            imgUrl="https://i.imgur.com/2M7oJwY.png"
            websiteUrl="https://weather.scottosmith.net/"
            githubUrl="https://github.com/scottosmith/the-weather"
          >
            Using <ExLink url="https://reactjs.org">React</ExLink>,&nbsp;
            <ExLink url="https://github.com/css-modules/css-modules">
              CSS modules
            </ExLink>
            , and the{' '}
            <ExLink url="https://openweathermap.org/api">
              OpenWeatherMap API
            </ExLink>
            , I made a basic weather app. This was fun because I've always
            wanted to make a custom weather app. I have plans to adapt this to
            my flying and hiking needs, to show the specific information I'm
            always looking for without having to weed through all the excess.
          </Project>
        </Card>
        <Card>
          <Project
            title="scottosmith.net"
            websiteUrl="https://scottosmith.net/"
            githubUrl="https://github.com/scottosmith/scottosmith.net"
          >
            Using the{' '}
            <ExLink url="https://github.com/gatsbyjs/gatsby-starter-default">
              Gatsby default starter
            </ExLink>
            , I built my portfolio/personal website using{' '}
            <ExLink url="https://styled-components.com/">
              Styled Components
            </ExLink>
            , something I am THOROUGHLY enjoying using.
            <ExLink url="https://jamstack.org/">Jamstack</ExLink> is great!
          </Project>
        </Card>
      </CardContainer>
    </Layout>
  );
};

export default Projects;
