import React from 'react';

import Card from '../components/ui/card';
import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = () => {
  return (
    <Layout>
      <SEO title='Home' />
      <Card>
        Hello! I'm Scott Smith. I'm a full stack developer with a particular interest in all things front end. I love JavaScript, React, and all things CSS. 
      </Card>
    </Layout>
  );
};

export default IndexPage;
