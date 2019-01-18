import styled from 'styled-components'

export const FooterStyles = styled.div`
  width: 100%;
  margin: 0;
  overflow-x: hidden;
  box-sizing: border-box;
  padding: 0;
  .footer__info {
    background-color: #15181b;
    height: 500px;
    color: #fff;
    margin: 0 auto;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    h1 {
      font-size: 3rem;
      color: #fff;
    }
    p {
      font-size: 1.5rem;
      width: 460px;
      text-align: center;
      line-height: 2.5rem;
      @media (max-width: 767px) {
        width: 90vw;
      }
    }
  }
  .footer__bottom {
    background-color: #fff;
    color: #fff;
    margin: 0 auto;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    h2 {
      color: #15181b;
      margin-bottom: 3rem auto;
      @media (max-width: 767px) {
        width: 75%;
      }
    }
    input {
      margin: 1rem 2.5px 0 0;
      box-sizing: border-box;
      width: 250px;
      padding: 15px 32px;
      font-size: 16px;
      display: inline-block;
      text-decoration: none;
      color: #15181b;
      @media (max-width: 767px) {
        display: flex;
        width: 300px;
        margin: 1rem 0 0;
        justify-content: center;
        align-content: space-between;
        flex-direction: column;
        text-align: center;
      }
    }
  }
`
