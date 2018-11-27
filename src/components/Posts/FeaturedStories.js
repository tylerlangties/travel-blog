import React, { Component } from 'react'
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
  h1,
  p {
    width: 22.5vw;
    @media (max-width: 1000px) {
      width: 35vw;
    }
    @media (max-width: 767px) {
      width: 80vw;
    }
  }
  h3 {
    margin: 0.2rem 0 1rem;
    letter-spacing: 0.5px;
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
    .read-time {
      color: #dd5039;
      .fas {
        padding-right: 0.5rem;
      }
    }
  }
  img {
    object-fit: cover;
    width: 22.5vw;
    border-radius: 3px;
    height: 300px;
    transition: transform ease 200ms;
    &:hover {
      transform: scale(1.015);
    }
    @media (max-width: 1000px) {
      width: 35vw;
    }
    @media (max-width: 767px) {
      width: 80vw;
    }
  }
`

const FeaturedStories = ({ posts }) => (
  <MasonryBrick>
    <Link to={posts.slug}>
      <img src={posts.featuredImage.fluid.src} />
    </Link>
    <h1>
      <Link to={posts.slug}>{posts.title}</Link>
    </h1>
    <h3>
      {posts.authors.map(({ authorName, id }) => {
        return <div key={id}><h3>{authorName}</h3></div>
      })}
    </h3>
    <h4>{posts.body.childMarkdownRemark.excerpt}</h4>

    <h4>
      <Link to={posts.slug}>See More..</Link>
      <span>{posts.tags.map(({ name, id }) => {
        return <div key={id}><span>{name}</span></div>
      })}</span>
    </h4>
    <h4>
      <i>{posts.createdAt}</i>
      <span className="read-time">
        <i className="fas fa-book-open" />
        {posts.readtime}
      </span>
    </h4>
  </MasonryBrick>
)

export default FeaturedStories
