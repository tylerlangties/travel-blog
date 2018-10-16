import React from 'react'
import { Link } from 'gatsby'
import styled from "styled-components"

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  box-sizing: border-box;
`;

const Nav = styled.nav`
  max-width: 960px;
  box-sizing: border-box;
  width: 100vw;
  padding: 1.45rem 1.0875rem;
  display: flex;
  justify-content: center; 
  ul{
    list-style: none;
    margin: 0;
    justify-content: center;
    display: flex;
    li {
      margin: 0 1rem;
      i{
        font-size: 3rem;
        color: #0084b4;
      }
    }
  }
`;

const Header = () => (
    <Wrapper>
      <Nav>
      <ul>
          <li><h2><Link to="/">Explore</Link></h2></li>
          <li><Link to="/"><i className="fas fa-drafting-compass"></i></Link></li>
          <li><h2><Link to ="/about">About</Link></h2></li>
      </ul>
      </Nav>
    </Wrapper>
)

export default Header
