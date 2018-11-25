import React, { Component } from 'react';
import Map from '../components/Map';
import Layout from '../components/layout';
import styled from 'styled-components';

const HeaderStyles = styled.div`
    h1 {
        font-size: 4rem;
    }
    hr {
        overflow: visible; /* For IE */
        padding: 0;
        border: none;
        border-top: medium double #333;
        color: #333;
        margin: 4rem 0;
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

const Main = styled.div`
    display: flex;
    justify-content: center;
`;

const Blog = styled.div`
    max-width: 720px;
    font-size: 125%;
    img {
    border-radius: 3px;
    max-width: 720px;
    height: 500px;
    object-fit: cover;
    @media (max-width: 767px) {
        width: 90vw;
    }
    }
    @media (max-width: 767px) {
        width: 90vw;
    }
`;


export default class PostPage extends Component {

render() {
    const { data } = this.props;
    return (
        <Layout>
            <HeaderStyles>
                    
            <h1>{data.contentfulBlogPost.title}</h1>
            <span>Author | {data.contentfulBlogPost.createdAt}</span>
            <hr />
            </HeaderStyles>
            <Main>
                <Blog>
            <div dangerouslySetInnerHTML = {{
            __html: data.contentfulBlogPost.body.childMarkdownRemark.html
            }}/>
            </Blog>
            </Main>
            
        </Layout>
        );
    }
}

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    contentfulBlogPost(slug: {eq: $slug}) {
      title
      createdAt(formatString: "MMMM DD, YYYY")
      featuredImage {
      id
      fluid {
        src
      }
    }
      body {
        childMarkdownRemark {
          html
        }
      }
      slug
      id
    }
  }
`;

