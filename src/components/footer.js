import React from 'react'
import { FooterStyles } from '../styles/footerstyles'
import { ButtonPrimary } from '../styles/buttons'

const Footer = () => (
  <FooterStyles>
    <div className="footer__info">
      <h1>About Us</h1>
      <p>
        We are dedicated to fostering empathy through storytelling. We aim to
        provide a platform for those who document and capture the world around
        us, bringing them together to create a lasting and impactful record of
        life on Earth that we can all experience.
      </p>
    </div>
    <div className="footer__bottom">
      <h2>Subscribe to receive the very best stories in your inbox</h2>
      <form id="form" className="topBefore">
        <input id="name" type="text" placeholder="NAME" />
        <input id="email" type="text" placeholder="E-MAIL" />
        <ButtonPrimary id="submit" className="button" type="submit">
          {' '}
          Subscribe Now
        </ButtonPrimary>
      </form>
    </div>
  </FooterStyles>
)

export default Footer
