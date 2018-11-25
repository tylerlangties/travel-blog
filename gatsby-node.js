const path = require("path");

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allContentfulBlogPost{
            edges{
              node{
                id
                title
                createdAt(formatString: "MMMM DD, YYYY")
                slug
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
                    excerpt(pruneLength: 300)
                  }
                }
              }
            }
          }
      }
    `).then(result => {
      result.data.allContentfulBlogPost.edges.forEach(({ node }) => {
        createPage({
          path: node.slug,
          component: path.resolve("./src/posts/PostPage.js"),
          context: {
            slug: node.slug
          }
        });
      });
      resolve();
    });
  });
};