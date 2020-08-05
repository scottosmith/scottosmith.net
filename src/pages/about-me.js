import React from 'react';
import { useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'
import styled from 'styled-components';

import Card from '../components/ui/card';
import Layout from '../components/layout';
import SEO from '../components/seo';

const AboutImg = styled(Img)`
  margin: 1em auto;
  border: 1.5px solid #212121;
`;

const AboutMe = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "me2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800, quality: 100) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title='About Me' />
      <Card>
        <h2>A little about me:</h2>
        <AboutImg title='On a boat' alt='On a boat' fluid={data.placeholderImage.childImageSharp.fluid} />
        <p>
          I take pictures, I travel, I code, I make music. My dog Rhonda is the coolest thing on this here planet Earth! 
          I love my motorcycle, can't get enough of my van, and am working on getting my private pilot license. 
          I'm endlessly scouting the world around me for all the nooks and crannies that the rest of the world hasn't noticed yet.
        </p>
        <p>
          More to come!
        </p>
      </Card>
    </Layout>
  );
};

export default AboutMe;
