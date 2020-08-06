import React from 'react';
import styled from 'styled-components';

import Card from '../components/ui/card';
import Layout from '../components/layout';
import SEO from '../components/seo';

const Currents = styled.div`
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
          drive me to keep learning, experimenting, and growing. Over 15 years of experience in the development world and there's still so much to learn!
        </p>
        <Currents>
          <h3>My current dev interests:</h3>
          <ul>
            <li><a href="https://reactjs.org/" target="_blank" rel="noreferrer">React</a></li>
            <li><a href="gatsbyjs.org/" target="_blank" rel="noreferrer">Gatsby</a></li>
            <li><a href="https://graphql.org/" target="_blank" rel="noreferrer">GraphQL</a></li>
            <li><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations" target="_blank" rel="noreferrer">CSS Animations</a></li>
            <li><a href="https://styled-components.com/" target="_blank" rel="noreferrer">Styled Components</a></li>
          </ul>
        </Currents>
      </Card>
    </Layout>
  );
};

export default IndexPage;
