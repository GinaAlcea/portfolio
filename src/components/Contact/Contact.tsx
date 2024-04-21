import { Stack } from '@mui/material'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'
import './Contact.scss'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const contactArray = 'Contact me'.split('')
  // const refForm = useRef()

  // const sendEmail = (e: any) => {
  //   console.log(e)
  //   e.preventDefault()

  //   emailjs
  //     .sendForm('service_hyyudiu', 'contact_form', refForm.current, {
  //       publicKey: '1Fn86Hq0gZrsc0rtA',
  //     })
  //     .then(
  //       () => {
  //         alert('Message has been successfully sent!')
  //         window.location.reload()
  //       },
  //       (error) => {
  //         alert('Message has not been sent. Please try again')
  //       }
  //     )
  // }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters strArray={contactArray} index={1} />
          </h1>
          <h2>anything else?</h2>
          <form noValidate
          // ref={refForm} onSubmit={sendEmail}
          >
            <Stack className="contact-form" direction={'column'}>
              <Stack className="contact-form-info" direction={'row'}>
                <input type="text" name="name" placeholder="Name" required />
                <input
                  type="email"
                  name="email"
                  placeholder="E-mail"
                  required
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                />
              </Stack>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
              />
              <textarea name="message" placeholder="Message" required />
            </Stack>
            <button className="button" type="submit">
              SEND
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Contact
