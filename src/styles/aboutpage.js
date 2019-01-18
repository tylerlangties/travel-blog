import styled from 'styled-components'

export const AboutPage = styled.div`
  display: flex;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 800px;
  font-size: 125%;
  letter-spacing: 1.25px;
  height: 77.5vh;
  h1 {
    font-size: 4rem;
    @media (max-width: 767px) {
      font-size: 2rem;
    }
  }
  h3 {
    font-size: 1.5rem;
    text-align: center;
    line-height: 2rem;
  }
`
