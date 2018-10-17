import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const SecondPage = () => (
  <Layout>
    <h1>Hi this is some info</h1>
    <p>Welcome About</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage;
