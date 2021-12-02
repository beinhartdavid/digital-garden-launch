 import { Link } from "gatsby"
import React from "react"

 export default function Navbar() {
     return (
<nav>
    <h1>Digital Garden</h1>
    <div className = "links"> </div>
    <Link to = "/">Home</Link>
    <Link to = "/about">About</Link>
    <Link to = "/projects">Portfolio Projects</Link>
</nav>

     )

 }
