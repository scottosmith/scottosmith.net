import React from 'react';

import Card from '../components/ui/card';
import Layout from '../components/layout';
import SEO from '../components/seo';

const AboutMe = () => (
  <Layout>
    <SEO title='About Me' />
    <Card>
      <h2>A little about me:</h2>
      <img></img>
      <p>I take pictures, I travel, I code, I make music. My dog Rhonda is the coolest thing on this here planet Earth! I love my motorcycle, can't get enough of my van, and am working on getting my private pilot license. I'm endlessly scouting the world around me for all the nooks and crannies that the rest of the world hasn't noticed yet.</p>
    </Card>
  </Layout>
);

export default AboutMe;
