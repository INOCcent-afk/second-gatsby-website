import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import Image from "gatsby-image"
import "./Navbar.scss"

const getLogo = graphql`
  {
    iconImage: file(
      sourceInstanceName: { eq: "images" }
      relativePath: { eq: "gatsby-icon.png" }
    ) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    astronauteImage: file(
      sourceInstanceName: { eq: "images" }
      relativePath: { eq: "gatsby-astronaut.png" }
    ) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`

const Navbar = () => {
  const data = useStaticQuery(getLogo)
  return (
    <nav>
      <div className="logo">
        <Link to="/">
          <Image fluid={data.iconImage.childImageSharp.fluid} />
        </Link>
      </div>
      <ul>
        <li>
          <Link to="/">AQURIUM ZEN</Link>
        </li>
        <li>
          <Link to="/About">ABOUT</Link>
        </li>
        <li>
          <Link to="/Services">SERVICES</Link>
        </li>
        <li>
          <Link to="/Products">PRODUCTS</Link>
        </li>
        <li>
          <Link to="/Contacts">CONTACT</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
