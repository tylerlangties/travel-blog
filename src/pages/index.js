import React, { Component } from 'react'
import Layout from '../components/layout'
import styled from 'styled-components'
import PostListing from '../components/Posts/PostListing'
import FeaturedStories from '../components/Posts/FeaturedStories'
import { ButtonPrimary } from '../styles/buttons';

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
    <PostListing />
    <hr/>

    <h1>Recent Stories</h1>
    <hr/>
    </Featured>
    <Masonry>
    {this.state.items.slice(0, this.state.visible).map((item) => {
      return <FeaturedStories key={item.node.id} posts={item.node} />
    })}
    
    </Masonry>
    {this.state.visible < this.state.items.length &&
      <ButtonPrimary onClick={this.loadMore} type="button">See more</ButtonPrimary>
    }
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
