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
    color: #f5f5f5;
    text-align: center;
    opacity: 0.75;
}
`;

const Masonry = styled.div`    
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  .load-more {
    background-color: #dd5039; /* RED */
    border: none;
    color: white;
    text-align: center;
    font-size: 16px;
    margin: 2.5rem 0 2rem;
    text-transform: uppercase;
    padding: 15px 32px;
    transition: background-color 200ms ease;
    &:hover {
      cursor: pointer;
      background-color: #F57460;
    }
  }

`;

export default class IndexPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      visible: 3,
      error: false
    };

    this.loadMore = this.loadMore.bind(this);
  }

  loadMore() {
    this.setState((prev) => {
      return {visible: prev.visible + 3};
    });
  }

  componentDidMount() {
    this.setState({
      items: this.props.data.allContentfulBlogPost.edges
    })
  }

  render(){
  
  return (
  <Layout>
    
    <Featured>
    <h1>Featured Story</h1>
    <hr/>
    {this.props.data.allContentfulFeaturedPost.edges.map(({node}) => {
      return <PostListing key={node.id} post={node} />
    })}
    <h1>Recent Stories</h1>
    <hr/>
    </Featured>
    <Masonry>
    {this.state.items.slice(0, this.state.visible).map((item) => {
      return <FeaturedStories key={item.node.id} posts={item.node} />
    })}
    {this.state.visible < this.state.items.length &&
      <button onClick={this.loadMore} type="button" className="load-more">See more</button>
    }
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
        readtime
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
            excerpt(pruneLength: 250)
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
        readtime
        tags {
          name
        }
        authors{
          authorName
          id
        }
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
            excerpt(pruneLength: 200)
          }
        }
      }
    }
  }
}
`;
