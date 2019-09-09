const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              posttype
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    const aboutPage = path.resolve("src/templates/blog-post.js");
    const servicePage = path.resolve("src/templates/services.js");
    if (node.frontmatter.posttype === 'blog') {
      createPage({
        path: `/blog${node.fields.slug}`,
        component: aboutPage,
        context: {
          slug:  node.fields.slug,
          category: node.frontmatter.category,
        }
      });
      } else if(node.frontmatter.posttype === 'service') { // blog post
        createPage({
          path: `/services${node.fields.slug}`,
          component: servicePage,
          context: {
            slug: node.fields.slug, 
            category: node.frontmatter.category,
          }
        });
      }
  })
}