import React, { Component } from 'react';
import { Link } from 'gatsby'
import styled from 'styled-components'

const MasonryBrick = styled.div`
  display: inline-block;
  margin: 0 0 1em;
  width: 100%;
  border: 1px solid lightgrey;
  padding: 2rem;
  border-radius: 3px;
`;

const FeaturedStories = ({posts}) => (
   <MasonryBrick>
    <h1><Link to="/">{posts.title}</Link></h1>
    <p>
        {posts.createdAt}
    </p>
    <h5>{posts.body.childMarkdownRemark.excerpt}</h5>
    <img src={posts.featuredImage.fluid.src} />
    </MasonryBrick>
);

export default FeaturedStories;