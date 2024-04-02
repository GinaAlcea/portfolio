import { Stack } from '@mui/material'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'
import './Contact.scss'

const Contact = () => {
  const contactArray = 'Contact me'.split('')

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters strArray={contactArray} index={1} />
          </h1>
          <h2>creative / enthusiastic / adaptive</h2>
          <form noValidate>
            <Stack className="contact-form" direction={'column'}>
              <Stack className="contact-form-info" direction={'row'}>
                <input type="text" name="name" placeholder="Name" required />
                <input
                  type="email"
                  name="email"
                  className="... :invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500"
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
