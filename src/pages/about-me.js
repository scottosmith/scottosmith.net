import React from 'react';
import { useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'
import styled from 'styled-components';

import Card from '../components/ui/cards/card';
import Layout from '../components/layout';
import SEO from '../components/seo';

const AboutImg = styled(Img)`
  margin: 1em auto;
  border: 1.5px solid var(--img-border);
  border-radius: 24px 4px;
`;

const AboutMe = () => {
  const data = useStaticQuery(graphql`
    query {
      about1: file(relativePath: { eq: "me2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800, quality: 100) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      },
      about2: file(relativePath: { eq: "me1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 550, quality: 100) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      },
      us1: file(relativePath: { eq: "us.jpeg" }) {
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
        <AboutImg title='On a boat' alt='On a boat' fluid={data.about1.childImageSharp.fluid} />
        <p>
          I take pictures, I travel, I code, I make music. I spend life with my best friend and partner, Maura. My dog Rhonda is the coolest thing on this here planet Earth. 
          I love my motorcycle, can't get enough of my van, and am working on getting my private pilot license. 
          I'm endlessly scouting the world around me for all the nooks and crannies that the rest of the world hasn't noticed yet.
        </p>
        <AboutImg title='On a mountain' alt='On a mountain' fluid={data.about2.childImageSharp.fluid} />
        <p>
          Under the sun, above the clouds, floating in a river, over the mountains, or through the woods. If it's outside, we're all about it. Travel, even on a more localized scale, builds character and understanding. Meet people, have experiences, gain knowledge, enjoy life. Get out there and see the world!
        </p>
        <AboutImg title='In Tinseltown' alt='In Tinseltown' fluid={data.us1.childImageSharp.fluid} />
      </Card>
    </Layout>
  );
};

export default AboutMe;
