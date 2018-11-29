import React, { Component } from 'react'
import Layout from '../components/layout'
import FeaturedListing from '../components/Posts/FeaturedListing'
import RecentStories from '../components/Posts/RecentStories'
import { ButtonPrimary } from '../styles/buttons'
import { HR } from '../styles/horizonalrule'
import { LandingPage } from '../styles/landingpage'

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
    
    <LandingPage>
      <h1>Featured Story</h1>
      <HR/>
      <FeaturedListing />
      <h1>Recent Stories</h1>
      <HR/>
      <div className="landingpage__postlist">
        {this.state.items.slice(0, this.state.visible).map((item) => {
          return <RecentStories key={item.node.id} posts={item.node} />
        })}
      </div>
      {this.state.visible < this.state.items.length &&
        <ButtonPrimary onClick={this.loadMore} type="button">See more</ButtonPrimary>
      }
    </LandingPage>
  </Layout>
  )}}

export const query = graphql`
query Featured{
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
