import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Styled from 'styled-components'
import Header from './header'
import Footer from './footer';

const Main = Styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  justify-content: center;
  margin: 3rem auto;
  max-width: 90vw;
  padding: 0px 1.0875rem 1.45rem;
  a {
    color: #b85b5a;
    transition: color 200ms ease;
    &:hover {
      text-decoration: none;
      color: #783737; 
      cursor: pointer;
    }
  }
  @media (max-width: 767px) {
    align-items: center;
  }
`;

const Layout = ({ children }) => (
  <div>
    <Helmet>
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.4.1/css/all.css" 
      integrity="sha384-5sAR7xN1Nv6T6+dT2mhtzEpVJvfS3NScPQTrOxhwjIuvcA67KV2R5Jz6kr4abQsz" 
      crossorigin="anonymous"/></Helmet>
    <Header/>
    <Main>
      {children}
    </Main>
    <Footer />
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout;
