import React from 'react'
import Layout from '../components/layout'
import styled from 'styled-components'
import PostListing from '../components/Posts/PostLosting';

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

const IndexPage = ({data}) => (
  <Layout>
    <h1>Hi people</h1>
    <p>Welcome to the blah blah.</p>
    <Featured>
    <h3>Featured Story</h3>
    <hr/>
    {data.allContentfulBlogPost.edges.map(({node}) => {
      return <PostListing key={node.id} post={node} />
    })}
    </Featured>
  </Layout>
)

export default IndexPage

export const query = graphql`
query Featured{
  allContentfulBlogPost {
    edges {
      node {
        id
        title
        featuredImage {
          id
          title
          fluid(maxWidth: 2000){
            src
            sizes
          }
        }
        slug
        createdAt(formatString: "MMMM DD, YYYY")
        body {
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
