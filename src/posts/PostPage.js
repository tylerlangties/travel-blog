import React, { Component } from 'react';
import Layout from '../components/layout';
import styled from 'styled-components';
import { HR } from '../styles/horizonalrule';
import FeaturedListing from '../components/Posts/FeaturedListing'
import { Link } from 'gatsby';

const PostWrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    hr {
        max-width: 800px;
    }
    .postwrapper__title {
        font-size: 4rem;
    }
    .postwrapper__inner {
        max-width: 800px;
        font-size: 125%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin: 1rem 0;
        @media (max-width: 767px) {
        width: 90vw;
        }
        img {
            border-radius: 3px;
            width: 100%;
            object-fit: cover;
            @media (max-width: 767px) {
            width: 90vw;
            }
        }
    }
    .bitch {
        width: 100%;
        object-fit: cover;
        position: relative;
    }
`;

export default class PostPage extends Component {

render() {
    const { data } = this.props;
    return (
        <Layout>
            <PostWrapper>

                <h1 className="postwrapper__title">
                    {data.contentfulBlogPost.title}
                </h1>
                
                <span>{data.contentfulBlogPost.authors.map(({ authorName, id }) => {
                    return <span key={id}>{authorName}</span>
                    })} | {data.contentfulBlogPost.createdAt}
                </span>
                
                <div className="postwrapper__inner">
                <HR />
                    <div dangerouslySetInnerHTML = {{
                    __html: data.contentfulBlogPost.body.childMarkdownRemark.html
                    }}/>
                    
                </div>
                <img className="bitch" src={data.contentfulBlogPost.featuredImage.fluid.src}/>
                <Link to="/">Go back to the homepage</Link>
                
            </PostWrapper>
            
            
        </Layout>
        );
    }
}

export const query = graphql`
    query BlogPostQuery($slug: String!) {
    contentfulBlogPost(slug: {eq: $slug}) {
        title
        createdAt(formatString: "MMMM DD, YYYY")
        slug
        authors{
            authorName
        }
        id
        featuredImage {
            id
            fluid (maxWidth: 2000) {
                src
            }
        }
        body {
            childMarkdownRemark {
                html
            }
        }
    }
}
`;

