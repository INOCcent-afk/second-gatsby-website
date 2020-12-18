/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query GetAllAnimals {
      animals: allContentfulAnimals {
        nodes {
          slug
        }
      }
    }
  `)
  result.data.animals.nodes.forEach(animal => {
    createPage({
      path: `/animal/${animal.slug}`,
      component: path.resolve(`src/templates/animalTemplate.js`),
      context: {
        slug: animal.slug,
      },
    })
  })
}
