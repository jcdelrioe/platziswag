import React from "react"
import { graphql } from "gatsby"
import { Jumbo, SEO, Products } from "../components"

export const query = graphql`
  query GET_DATA {
    allSite {
      edges {
        node {
          siteMetadata {
            description
          }
        }
      }
    }
    allStripePrice {
      edges {
        node {
          id
          product {
            name
            metadata {
              img
              wear
            }
          }
          price: unit_amount
        }
      }
    }
  }
`

const IndexPage = ({ data }) => {
  console.log(data)
  return (
    <>
      <SEO title="Home" />
      <Jumbo
        description={data.allSite.edges[0].node.siteMetadata.description}
      />
      <Products products={data.allStripePrice.edges} />
    </>
  )
}

export default IndexPage
