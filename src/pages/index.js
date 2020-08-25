import React from 'react';
import styled from 'styled-components';

import Card from '../components/ui/cards/card';
import Layout from '../components/layout';
import SEO from '../components/seo';

const PaddedList = styled.div`
  margin-left: .5em;
`;

const IndexPage = () => {
  return (
    <Layout>
      <SEO title='Home' />
      <Card>
        <p>
          Hello! I'm Scott Smith and this is my portfolio. I'm a full stack developer, but with a particular love of all things front end. 
          Having a direct influence on the user experience and being able to build the interfaces that connect people to services are what 
          drive me to keep learning, experimenting, and growing. Over 15 years in the development world and there's still so much to learn!
        </p>
        <PaddedList>
          <h3>Things currently occupying the techy part of my brain:</h3>
          <ul>
            <li><a href="https://reactjs.org/" target="_blank" rel="noreferrer">React</a></li>
            <li><a href="https://gatsbyjs.com/" target="_blank" rel="noreferrer">Gatsby</a></li>
            <li><a href="https://graphql.org/" target="_blank" rel="noreferrer">GraphQL</a></li>
            <li><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations" target="_blank" rel="noreferrer">CSS Animations</a></li>
            <li><a href="https://styled-components.com/" target="_blank" rel="noreferrer">Styled Components</a></li>
          </ul>
        </PaddedList>
        <p>
          As you can see, I don't have a blog. I know, right? Very not 2020... but as much as I love to write and share knowledge, it isn't my forte, 
          and that's ok! Everything is not for everyone. There are some amazing people out there in the world who are better skilled at teaching methods 
          and styles that really get the point across.
        </p>
        <PaddedList>
          <h3>Here are a few teach teachers that inspire me:</h3>
          <ul>
            <li><a href="https://mobile.twitter.com/dan_abramov">Dan Abramov</a></li>
          </ul>
        </PaddedList>
      </Card>
    </Layout>
  );
};

export default IndexPage;
