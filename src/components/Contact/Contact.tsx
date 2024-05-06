import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'
import './Contact.scss'
import { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { generateShootingStars } from './ContactBackground'

const Contact = () => {
  const [alertType, setAlertType] = useState<'success' | 'error' | null>(null)
  const contactArray = 'Contact me'.split('')
  const refForm = useRef<HTMLFormElement>(null)

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (refForm.current) {
      emailjs
        .sendForm('service_form', 'contact_form', refForm.current, {
          publicKey: '1Fn86Hq0gZrsc0rtA',
        })
        .then(
          () => {
            setAlertType('success')
            setTimeout(() => setAlertType(null), 5000)
            refForm.current && refForm.current.reset()
          },
          (error) => {
            setAlertType('error')
            setTimeout(() => setAlertType(null), 5000)
          }
        )
    }
  }

  useEffect(() => {
    generateShootingStars('contact-background', 2)
  }, [])

  return (
    <>
      <div id="contact-background"></div>
      <div className="container contact-page">
        {alertType === 'success' ? (
          <div className="alert-popup success">
            <FontAwesomeIcon icon={faCheck} style={{ margin: '0.5rem' }} />
            Message has been successfully sent!
          </div>
        ) : alertType === 'error' ? (
          <div className="alert-popup error">
            <FontAwesomeIcon icon={faXmark} style={{ margin: '0.5rem' }} />
            Message has not been sent. Please try again.
          </div>
        ) : (
          ''
        )}
        <div className="text-zone">
          <h1>
            <AnimatedLetters strArray={contactArray} index={1} />
          </h1>
          <h2>questions / offers </h2>
          <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
              <div className="contact-form-info">
                <input type="text" name="name" placeholder="Name" required />
                <input
                  type="email"
                  name="email"
                  placeholder="E-mail"
                  required
                />
              </div>
              <div className="contact-form-message">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  required
                />
                <textarea name="message" placeholder="Message" required />
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <button className="button" type="submit">
                  SEND
                </button>
                <div className="mobile-socials">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.linkedin.com/in/ginaisaia/"
                  >
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/GinaAlcea"
                  >
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
