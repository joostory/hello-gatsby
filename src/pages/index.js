import React from "react"
import { Link } from "gatsby"

export default function() {
  return (
    <div>
      <h1>Hello</h1>
      <p>
        안녕하세요. 반갑습니다.
      </p>
      <ul>
        <li><Link to="/about">About</Link></li>
      </ul>
    </div>
  )
}
