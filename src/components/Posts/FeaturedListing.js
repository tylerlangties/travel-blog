import React from 'react';
import { Link } from 'gatsby';
import { StaticQuery, graphql } from 'gatsby' 
import { FeaturedListing } from '../../styles/featuredlisting';

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
                    createdAt(formatString: "MMMM DD, YYYY")
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
    <div className="featuredlisting">
        {data.allContentfulBlogPost.edges.map(({ node }) => {
        return (
            <FeaturedListing>

                <div className="featuredlisting__wrapper">
                <Link to={node.slug}><h1 className="featuredlisting__title">{node.title}</h1></Link>
                    <p>
                        {node.createdAt}
                    </p>
                    <h3 className="featuredlisting__excerpt">
                        {node.body.childMarkdownRemark.excerpt}
                    </h3>

                    <br/>

                    <div className="featuredlisting__link">
                        <Link to={node.slug}>
                            <h4>See More..</h4>
                        </Link>
                    </div>
                </div>

                <div className="featuredlisting__image">
                    <Link to={node.slug}><img src={node.featuredImage.fluid.src}/> </Link>
                </div>

            </FeaturedListing>
            )
        })}
    </div>
    )}
/>
)

