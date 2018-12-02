import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/layout'

const Aboutpage = styled.div`
  display: flex;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 800px;
  font-size: 125%;
  letter-spacing: 1.25px;
  height: 77.5vh;
  h1 {
    font-size: 4rem;
  }
  h3 {
    font-size: 1.5rem;
    text-align: center;
    line-height: 2rem;
  }
`;

const SecondPage = () => (
  <Layout>
    <Aboutpage>
    <h1>Hi this is some info</h1>
    <h3>At the heart of storytelling on tyler is the growing group of over 200 featured contributors — many of whom are renowned and emerging photographers.
       Their stories enable us to experience the beauty and diversity of our planet, and to learn more about social, environmental, and cultural issues around the globe.</h3>
    <Link to="/">Go back to the homepage</Link>
    </Aboutpage>
  </Layout>
)

export default SecondPage;
