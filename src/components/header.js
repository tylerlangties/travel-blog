import React from 'react'
import { Link } from 'gatsby'
import styled from "styled-components"

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  flex-direction: column;
  background-color: #15181b;
`;

const Nav = styled.nav`
  max-width: 90vw;
  box-sizing: border-box;
  width: 100vw;
  margin: 0 auto;
  padding: 1.45rem 1.0875rem;
  display: flex;
  justify-content: space-between; 
  flex-direction: row;
  align-items: center;
  i {
    font-size: 3rem;
  }
  .links {
    display: flex;
    flex-direction: row;
    h2 {
      margin: 1rem .5rem;
    }
  }
    a { 
    color: white;
    text-decoration: none;
    transition: color 150ms ease;
    &:hover {
      color: #dd5039;
    }
  }

`;

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
