import React from 'react';

import CardContainer from '../components/ui/card-container';
import Card from '../components/ui/card';
import Layout from '../components/layout';
import SEO from '../components/seo';

const Projects = () => {
  return (
    <Layout>
      <SEO title='Home' />
      <CardContainer>
        <Card>
          <h3>Project 1</h3>
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
