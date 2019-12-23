import React from "react"
import { Link, graphql } from "gatsby"
import Container from "../components/Container"

export default function({data}) {
  const meta = data.site.siteMetadata
  const posts = data.allMarkdownRemark.edges
  return (
    <Container>
      <h1>{meta.title}</h1>
      <p>
        안녕하세요. 반갑습니다.
      </p>
      <ul>
        <li><Link to="/about">About</Link></li>
      </ul>

      <ul>
        {posts.map(({ node }) =>
          <li>
            <Link to={node.fields.slug}>
              {node.frontmatter.title}
            </Link>
            <span>{node.frontmatter.date}</span>
            <p>{node.excerpt}</p>
          </li>
        )}
      </ul>
    </Container>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
