import React from 'react';
import { useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'
import styled from 'styled-components';

import Card from '../components/ui/cards/card';
import Layout from '../components/layout';
import SEO from '../components/seo';
import ExLink from '../components/ui/ex-link';

const PaddedList = styled.div`
  margin-left: .5em;
`;

const Avatar = styled(Img)`
  border-radius: 50%;
  width: 200px;
  border: 1.5px solid var(--img-border);
  margin-bottom: 1rem;

  @media (min-width: 425px) {
    margin-bottom: auto;
  }
`;

const IntroSection = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  width: 100%;
  margin-bottom: 2rem;

  @media (min-width: 425px) {
    flex-flow: row nowrap;
    margin-right: 0;
  }

  p {
    margin: 0;
    text-align: center;

    @media (min-width: 425px) {
      text-align: right;
      margin-left: 1rem;
    }
  }
`;

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "me.png" }) {
        childImageSharp {
          fluid(maxWidth: 200, quality: 100) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title='Home' />
      <Card>
        <IntroSection>
          <div>
            <Avatar title='Me!' alt='Me!' fluid={data.placeholderImage.childImageSharp.fluid} />
          </div>
          <p>
            Hello! I'm Scott Smith and this is my portfolio. I'm a full stack developer, but with a particular love of all things front end. 
            Having a direct influence on the user experience and being able to build the interfaces that connect people to services are what 
            drive me to keep learning, experimenting, and growing. Over 15 years in the development world and there's still so much to learn!
          </p>
        </IntroSection>
        <PaddedList>
          <h3>Things I've been getting more familiar with:</h3>
          <ul>
            <li><ExLink url="https://nextjs.org/">Next.js</ExLink></li>
            <li><ExLink url="https://graphql.org/">GraphQL</ExLink></li>
            <li><ExLink url="https://styled-components.com/">Styled Components</ExLink></li>
            <li><ExLink url="https://tailwindcss.com/">Tailwind CSS</ExLink></li>
            <li><ExLink url="https://fujifilm-x.com/global/products/cameras/x100f/">My Fuji X100F</ExLink></li>
          </ul>
        </PaddedList>
        <PaddedList>
          <h3>A few inspirational tech people:</h3>
          <ul>
            <li><ExLink url="https://nerdy.dev/">Adam Argyle</ExLink></li>
            <li><ExLink url="https://compiled.blog/">Emma Bostian</ExLink></li>
            <li><ExLink url="https://angiejones.tech/">Angie Jones</ExLink></li>
            <li><ExLink url="https://twitter.com/dan_abramov">Dan Abramov</ExLink></li>
            <li><ExLink url="https://www.jamesqquick.com/">James Q. Quick</ExLink></li>
          </ul>
        </PaddedList>
      </Card>
    </Layout>
  );
};

export default IndexPage;
