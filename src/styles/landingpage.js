import styled from 'styled-components'

export const LandingPage = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  .landingpage__featured-header,
  .landingpage__recent-header {
    font-size: 3rem;
  }
  @media (max-width: 767px) {
    align-items: center;
  }
  .landingpage__postlist {
    margin-top: 3rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  .landingpage__load-more {
    margin: 2.75rem auto 0;
  }
`
