import React, { Component } from 'react'
import Layout from '../components/layout'
import { HR } from '../styles/horizonalrule'
import { PostWrapper } from '../styles/postwrapper'
import { Link } from 'gatsby'

export default class PostPage extends Component {
  render() {
    const { data } = this.props
    return (
      <Layout>
        <PostWrapper>
          <h1 className="postwrapper__title">
            {data.contentfulBlogPost.title}
          </h1>

          <span>
            {data.contentfulBlogPost.authors.map(({ authorName, id }) => {
              return <span key={id}>{authorName}</span>
            })}{' '}
            | {data.contentfulBlogPost.createdAt}
          </span>

          <div className="postwrapper__inner">
            <HR />
            <div
              className="postwrapper__inner--content"
              dangerouslySetInnerHTML={{
                __html: data.contentfulBlogPost.body.childMarkdownRemark.html,
              }}
            />
          </div>
          <Link to="/">
            <h4 className="postwrapper__home-link">Go back to the homepage</h4>
          </Link>
        </PostWrapper>
      </Layout>
    )
  }
}

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      createdAt(formatString: "MMMM DD, YYYY")
      slug
      authors {
        authorName
      }
      id
      featuredImage {
        id
        fluid(maxWidth: 2000) {
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
`
