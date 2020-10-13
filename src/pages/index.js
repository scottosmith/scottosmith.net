import React from 'react';
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components';

import Card from '../components/ui/cards/card';
import Layout from '../components/layout';
import SEO from '../components/seo';
import ExLink from '../components/ui/ex-link';

const Avatar = styled(Img)`
  border-radius: 24px 4px;
  width: 200px;
  border: 1.5px solid var(--img-border);
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    margin-bottom: auto;
  }
`;

const Section = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  width: 100%;
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    flex-flow: row nowrap;
    margin-right: 0;
  }

  p {
    margin: 0;
    text-align: center;

    @media (min-width: 768px) {
      text-align: left;
      margin-left: 1.5rem;
    }
  }
`;

const IntroTxt = styled.span`
  font-size: 3rem;
`;

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      avatar: file(relativePath: { eq: "me.png" }) {
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
        <Section>
          <div>
            <Avatar title='Me!' alt='Me!' fluid={data.avatar.childImageSharp.fluid} />
          </div>
          <p>
            <IntroTxt>I'm Scott Smith</IntroTxt>: a full stack developer with an emphasis on the front end. 
            Having a direct influence on the user experience and being able to build the interfaces that connect people to services are what 
            drive me to keep learning, experimenting, and growing. Over 15 years in the development world and there's always more to learn.
          </p>
        </Section>
        <Section>
          <p>
            These days, I've been spending my time with <ExLink url="https://reactjs.org/">React</ExLink> (a JavaScript library),&nbsp;
            <ExLink url="https://nextjs.org/">Next.js</ExLink> (a React-based framework), and&nbsp;
            <ExLink url="https://styled-components.com/">Styled Components</ExLink> (a tool for styling components in a clean and reusable way). 
            I've recently been learning more about <ExLink url="https://tailwindcss.com/">Tailwind CSS</ExLink>, a CSS framework. 
            This small group of tools gives you endless possibilities for building intuitive user experiences. Combine this with the growing 
            serverless/cloud-computing platforms like <ExLink url="https://aws.amazon.com/">AWS</ExLink> or <ExLink url="https://firebase.google.com/">Firebase</ExLink> and 
            you've got everything you need to build a scalable application that's built for a real-world environment right out of the gate.
          </p>
        </Section>
      </Card>
    </Layout>
  );
};

export default IndexPage;
