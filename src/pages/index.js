import React from "react"
import Layout from "../components/layout"
import { Link, graphql } from "gatsby"
import Image from "gatsby-image"
import "./Index.scss"
import Contact from "../components/ContactUs"

export const query = graphql`
  {
    allContentfulAnimals {
      nodes {
        id
        animalType
        animalImage {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
        animalDescription {
          animalDescription
        }
        slug
      }
    }
  }
`

const IndexPage = ({ data }) => {
  const {
    allContentfulAnimals: { nodes: animals },
  } = data
  return (
    <Layout>
      <div className="container">
        {animals.map(animal => {
          return (
            <article key={animal.id}>
              <div className="image-container">
                <Image
                  fluid={animal.animalImage.fluid}
                  alt={animal.animalType}
                />
              </div>
              <div className="animal-redirect">
                <h1>{animal.animalType}</h1>
                <p>{animal.animalDescription.animalDescription}</p>
                <button>
                  <Link to={`/animal/${animal.slug}`}>more details</Link>
                </button>
              </div>
            </article>
          )
        })}
      </div>
      <Contact />
    </Layout>
  )
}

export default IndexPage
