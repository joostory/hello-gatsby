import React from 'react'
import { graphql, Link } from 'gatsby'
import Container from '../components/Container'
import SEO from '../components/SEO'

export default function BlogPost({data}) {
  const post = data.markdownRemark
  return (
    <Container>
      <SEO title={post.frontmatter.title} description={post.excerpt} />
      <Link to="/">&lt; back</Link>
      <h1>{post.frontmatter.title}</h1>
      <span>{post.frontmatter.date}</span>
      <span>{post.frontmatter.path}</span>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </Container>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
      excerpt
    }
  }
`
