import React from 'react'
import "./navbar.css"
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
      </div>
      <div className="navbar-btn">
        <Link to="/"><a>Home</a></Link>
        <Link to="/aboutus"><a>About Us</a></Link>
        <Link to="/thefoundation"><a>The Foundation</a></Link>
        <Link to="/project"><a>Project</a></Link>
      </div>
    </div>
  )
}
