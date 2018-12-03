import React from 'react'
import { Link } from 'gatsby'
import { BlogCard } from '../../styles/blogcard';

const FeaturedStories = ({ posts }) => (
  <BlogCard>
    <Link to={posts.slug}>
      <img src={posts.featuredImage.fluid.src} />
    </Link>
    <h1>
      <Link to={posts.slug}>{posts.title}</Link>
    </h1>
    <div className="blogcard__authors">
      {posts.authors.map(({ authorName, id }) => {
        return <div key={id}><h3>{authorName}</h3></div>
      })}
    </div>
    <h4 className="blogcard__excerpt">{posts.body.childMarkdownRemark.excerpt}</h4>
    <div className="blogcard__links">
      <Link to={posts.slug}><strong>See More..</strong></Link>
      <span> 
        {posts.tags.map(({ name, id }) => {
          return <span key={id} className="blogcard__links--tags" key={id}>{name}</span>
        })}
      </span>
    </div>
    <div className="blogcard__links">
      <i>{posts.createdAt}</i>
      <span className="read-time">
        <i className="fas fa-book-open" />
        {posts.readtime}
      </span>
    </div>
  </BlogCard>
)

export default FeaturedStories
