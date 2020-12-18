import React from "react"
import Layout from "../components/Layout"
import { Link, graphql } from "gatsby"
import Image from "gatsby-image"
import "./animalTemplate.scss"
const animalTemplate = ({
  data: {
    animal: {
      animalType,
      animalDescription: { animalDescription },
      animalImage: { fluid },
    },
  },
}) => {
  return (
    <Layout>
      <div className="animal-template-container">
        <div className="container-wrapper">
          <div className="container-img">
            <Image fluid={fluid} />
          </div>
          <div className="container-content">
            <h1>{animalType}</h1>
            <p>{animalDescription}</p>
            <button>
              <Link to="/">back to animals</Link>
            </button>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query GetSingleAnimal($slug: String) {
    animal: contentfulAnimals(slug: { eq: $slug }) {
      animalImage {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      animalDescription {
        animalDescription
      }
      animalType
    }
  }
`

export default animalTemplate
