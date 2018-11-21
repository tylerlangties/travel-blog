import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import Styled from 'styled-components'
import Header from './header'


const Main = Styled.div`
  margin: 0 auto;
  max-width: 90vw;
  padding: 0px 1.0875rem 1.45rem;
  padding-top: 0;
`;

const Layout = ({ children }) => (
  <div>
    <Helmet>
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.4.1/css/all.css" integrity="sha384-5sAR7xN1Nv6T6+dT2mhtzEpVJvfS3NScPQTrOxhwjIuvcA67KV2R5Jz6kr4abQsz" crossorigin="anonymous"/><script async defer
    src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBYoK3l4NO0r09KWmU5bkDfAMG295laz0I&callback=initMap">
    </script></Helmet>
    <Header/>
    <Main>
      {children}
    </Main>
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout;
