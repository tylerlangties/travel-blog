import React from 'react'
import { Link } from 'gatsby'
import { StaticQuery, graphql } from 'gatsby'
import { FeaturedListing } from '../../styles/featuredlisting'

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
              authors {
                authorName
              }
              createdAt(formatString: "MMMM DD, YYYY")
              featuredImage {
                fluid(maxWidth: 1200) {
                  src
                }
              }
              tags {
                id
                name
              }
              body {
                childMarkdownRemark {
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
        {data.allContentfulBlogPost.edges.map(({ node, id }) => {
          return (
            <FeaturedListing key={id}>
              <div className="featuredlisting__wrapper">
                <Link to={node.slug}>
                  <h1 className="featuredlisting__title">{node.title}</h1>
                </Link>
                {node.authors.map(({ authorName, id }) => {
                  return (
                    <span key={id}>
                      <h3 className="featuredlisting__authors">{authorName}</h3>
                    </span>
                  )
                })}
                <h3 className="featuredlisting__excerpt">
                  {node.body.childMarkdownRemark.excerpt}
                </h3>
                <br />
                <div className="featuredlisting__link">
                  <Link to={node.slug}>
                    <strong>See More..</strong>
                  </Link>
                  <span>
                    {node.tags.map(({ name, id }) => {
                      return (
                        <span className="featuredlisting__link--tags" key={id}>
                          {name}
                        </span>
                      )
                    })}
                  </span>
                </div>
                <div className="featuredlisting__link">
                  <i>{node.createdAt}</i>
                  <span className="featuredlisting__link--read-time">
                    <i className="fas fa-book-open" />
                    {node.readtime}
                  </span>
                </div>
              </div>
              <div className="featuredlisting__image">
                <Link to={node.slug}>
                  <img src={node.featuredImage.fluid.src} />{' '}
                </Link>
              </div>
            </FeaturedListing>
          )
        })}
      </div>
    )}
  />
)
