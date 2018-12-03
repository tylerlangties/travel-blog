import React from 'react'
import { Link } from 'gatsby'
import { Wrapper, Nav } from '../styles/headerstyles'

const Header = () => (
    <Wrapper>
      <Nav>
      <Link to="/"><i className="fas fa-drafting-compass"></i></Link>
      <div className="links">
          <h2><Link to ="/about">About</Link></h2>
          <h2><Link to="/">Explore</Link></h2>
          </div>
      </Nav>
    </Wrapper>
)

export default Header
