import React, { Component } from 'react'
import Layout from '../components/layout'
import styled from 'styled-components'
import PostListing from '../components/Posts/PostLosting'
import FeaturedStories from '../components/Posts/FeaturedStories'


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

const Masonry = styled.div`    
  column-count: 2;
  column-gap: 1em;
  @media(max-width: 960px){
    column-count: 1;
  }
`;

export default class IndexPage extends Component {
render(){
  
  return (

  <Layout>
    
    <h1>Hi people</h1>
    <p>Welcome to the blah blah.</p>
    <Featured>
    <h3>Featured Story</h3>
    <hr/>
    {this.props.data.allContentfulFeaturedPost.edges.map(({node}) => {
      return <PostListing key={node.id} post={node} />
    })}
    <h3>Recent Stories</h3>
    <hr/>
    </Featured>
    <Masonry>
    {this.props.data.allContentfulBlogPost.edges.map(({node}) => {
      return <FeaturedStories key={node.id} posts={node} />
    })}
    </Masonry>
  </Layout>
  )}}


export const query = graphql`
query Featured{
  allContentfulFeaturedPost{
    edges{
      node{
        id
        title
        createdAt(formatString: "MMMM DD, YYYY")
        slug
        location{
          lon
          lat
        }
        featuredImage{
          fluid(maxWidth: 2500){
            src
          }
        }
        body{
          childMarkdownRemark{
            html
            excerpt(pruneLength: 300)
          }
        }
      }
    }
  }
  allContentfulBlogPost{
    edges{
      node{
        id
        title
        createdAt(formatString: "MMMM DD, YYYY")
        slug
        location{
          lon
          lat
        }
        featuredImage{
          fluid(maxWidth: 2500){
            src
          }
        }
        body{
          childMarkdownRemark{
            html
            excerpt(pruneLength: 300)
          }
        }
      }
    }
  }
}
`;
