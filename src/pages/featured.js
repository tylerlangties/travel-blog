import React, { Component } from 'react'
import Layout from '../components/layout'
import styled from 'styled-components'
import PostListing from '../components/Posts/PostLosting'


const Featured = styled.div`
margin-top: 3rem;
hr {
    overflow: visible; /* For IE */
    padding: 0;
    border: none;
    border-top: medium double #333;
    color: #333;
    text-align: center;
}
hr:after {
  content: "§";
  display: inline-block;
  position: relative;
  top: -0.7em;
  font-size: 1.5em;
  padding: 0 0.25em;
  background: white;
}
`;

const FeaturedListing = ({post}) => (
  <Layout>
    <Featured>
    <h1></h1>
    <hr/>
    </Featured>
  </Layout>
  )

export default FeaturedListing;
