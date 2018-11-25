import React, { Component } from 'react';
import { Link } from 'gatsby'
import styled from 'styled-components'

const MasonryBrick = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0 1em;
  border: 1px solid lightgrey;
  padding: 2rem;
  border-radius: 3px;
    h1 {
      font-size: 2.5rem;
      text-transform: uppercase;
    }
    h1, p{
      width: 22.5vw;
      @media (max-width: 1000px) {
      width: 35vw;
      }
      @media (max-width: 767px) {
        width: 80vw;
    }
  }
  h3 {
    margin: .2rem 0 1rem;
  }
  h4 {
      width: 22.5vw;
      display: flex;
      line-height: 18px;
      font-weight: 500;
      justify-content: space-between;
      @media (max-width: 1000px) {
      width: 35vw;
      }
      @media (max-width: 767px) {
        width: 80vw;
    }
  }
  img {
    object-fit: cover;
    width: 22.5vw;
    border-radius: 3px;
    height: 300px;
    @media (max-width: 1000px) {
      width: 35vw;
      }
    @media (max-width: 767px) {
        width: 80vw;
    }
  }
`;

const FeaturedStories = ({posts}) => (
   <MasonryBrick>
    <h1><Link to={posts.slug}>{posts.title}</Link></h1>
    <h3>{posts.authors}</h3>
    <h4>{posts.body.childMarkdownRemark.excerpt}</h4>
    <Link to={posts.slug}><img src={posts.featuredImage.fluid.src} /></Link>
    <p>
        <i>{posts.createdAt}</i>
    </p>
    <h4><Link to={posts.slug}>See More..</Link><span>{posts.tags}</span></h4>
    </MasonryBrick>
);

export default FeaturedStories;