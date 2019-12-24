import React from "react"
import { Link } from "gatsby"
import Container from "../components/Container"
import SEO from "../components/SEO"

export default function about() {
  return (
    <Container>
      <SEO />
      <h1>About</h1>
      <p>
        여기는 소개글입니다.
      </p>
      <ul>
        <li><Link to="/">Home</Link></li>
      </ul>
    </Container>
  )
}
