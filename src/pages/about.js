import React from "react"
import { Link } from "gatsby"
import Container from "../components/Container"

export default function about() {
  return (
    <Container>
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
