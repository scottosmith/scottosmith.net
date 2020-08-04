import React from 'react';

import Card from '../components/ui/card';
import Layout from '../components/layout';
import SEO from '../components/seo';

const AboutMe = () => (
  <Layout>
    <SEO title='About Me' />
    <Card>
      <h1>A little about me:</h1>
      <p>I'm tall.</p>
    </Card>
  </Layout>
);

export default AboutMe;
