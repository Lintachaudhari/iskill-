import React from "react"
import { Link } from "gatsby"

export default () => {
  return (
    <div style={{ color: "red" }}>
      <p>It is p element</p>
      Hello from Home
      <Link to="/blog">Check me</Link>
    </div>
  )
}
