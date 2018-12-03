import React from 'react'
import { Link } from 'gatsby'
import { AboutPage } from '../styles/aboutpage'
import Layout from '../components/layout'

const About = () => (
  <Layout>
    <AboutPage>
      <h1>Hi this is some info</h1>
      <h3>At the heart of storytelling on tyler is the growing group of over 200 featured           contributors — many of whom are renowned and emerging photographers.
        Their stories enable us to experience the beauty and diversity of our planet, and to learn more about social, environmental, and cultural issues around the globe.</h3>
      <Link to="/">Go back to the homepage</Link>
    </AboutPage>
  </Layout>
)

export default About;
