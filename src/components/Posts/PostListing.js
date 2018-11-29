import React from 'react';
import { Link } from 'gatsby';
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components';

const Style = styled.div`
    display: flex;
    margin: 3rem 0;
    padding: 0;
    flex-direction: row-reverse;
    justify-content: space-between;
    @media (max-width: 767px) {
        flex-direction: column-reverse;
    }
    
    .content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 45%;
        text-align: center;
        @media (max-width: 767px) {
            margin-top: 3rem;
            height: auto;
            width: 100%;
        }
    }
    h1 {
        font-size: 4rem;
        @media (max-width: 767px) {
            width: 100%;
        }
    }
    h3 {
    margin: .2rem 0 1rem;
    letter-spacing: .5px;
    text-align: left;
        line-height: 20px;
        display: flex;
        justify-content: space-between;
  }
    h4 {
        width: 85%;
        margin: 0;
        font-weight: 400;
        font-size: 1.15rem;
        text-align: left;
        line-height: 2rem;
        display: flex;
        justify-content: space-between;
        .blog-link {
            background-color: #dd5039; /* RED */
            border: none;
            color: white;
            text-align: center;
            padding: 1rem;
        }
        @media (max-width: 767px) {
            width: 100%
        }
    }
    a {
        &:hover {
            cursor: pointer;
        }
    }
`;


const Imgcont = styled.div`
    width: 50%;
    img {
    object-fit: cover;
    width: 100%;
    border-radius: 3px;
    height: 500px;
    }
    @media(max-width: 767px){
        width: 100%;
        margin: auto;
    }
`;

export default () => (
    <StaticQuery
    query={graphql`
        query FeaturedQuery {
            allContentfulBlogPost(filter: { isFeatured: { eq: true } }) {
            edges {
                node {
                    title
                    isFeatured
                    id
                    slug
                    readtime
                    featuredImage{
                        fluid(maxWidth: 2500){
                            src
                        }
                    }
                    tags {
                        id
                        name
                    }
                    body{
                        childMarkdownRemark{
                            html
                            excerpt(pruneLength: 250)
                            }
                        }
                    authors {
                        authorName
                        id
                    }
                }
            }
        }
    }
`}
    render={data => (
        <header>
            
            {console.log(data.allContentfulBlogPost.edges)}
            {data.allContentfulBlogPost.edges.map(({ node }) => {
        return (
            <Style>
                <div className="content">
                    <h1><Link to={node.slug}>{node.title}</Link></h1>
                    <p>
                        {node.createdAt}
                    </p>
                    <h4>{node.body.childMarkdownRemark.excerpt}</h4>
                    <br/>
                    <h4><Link to="/featured"><span className="blog-link">See More..</span></Link></h4>
                </div>
            <Imgcont>
            <img src={node.featuredImage.fluid.src} />
            </Imgcont>
            </Style>
        )
    })}
        </header>
    )}
/>
)

