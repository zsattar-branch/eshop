import React, { useState } from 'react'
import Button from '../../components/button/Button'
import './Contact-Page.scss'

const ContactPage = () => {
  // const [name, setName] = useState('')
  // const [email, setEmail] = useState('')
  // const [message, setMessage] = useState('')

  const [inputValue, setInputValue] = useState({ name: '', email: '', message: '' })

  const { name, email, message } = inputValue

  const handleSubmit = (e) => {
    e.prevent.default()
  }

  const handleChange = (e) => {
    const { value, name } = e.target
    setInputValue({ ...inputValue, [name]: value })
  }

  return (
    <div className="contact-page">
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="contact-us">CONTACT US</div>
        <div className="center-div">
        <input className="contact-name"
          name="name"
          type="name"
          value={name}
          onChange={handleChange}
          placeholder="Name"
          required
        />
        <input
          className="contact-email"
          name="email"
          type="email"
          value={email}
          onChange={handleChange}
          placeholder="Email"
          required
        />
        <textarea
          className="contact-message"
          name='message'
          type="message"
          value={message}
          onChange={handleChange}
          placeholder="Insert Message"
          rows="8"
          cols="40"
          required
          />
          
          <Button>Submit</Button>
          </div>
      </form>

    </div>
  )
}
export default ContactPage