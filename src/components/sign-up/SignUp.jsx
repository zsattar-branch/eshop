import React, { useState } from 'react'
import FormInput from '../form_input/FormInput'
import Button from '../button/Button'
import { auth, createUserProfileDocument } from '../../firebase/firebase'


import './SignUp.scss'

export default function SignUp() {
  const [inputValue, setInputValue] = useState({ displayName: '', email: '', password: '', confirmPassword: '' })

  const { displayName, email, password, confirmPassword } = inputValue
  
  const handleSubmit = async (e) => {
    e.preventDefault()

    if (password !== confirmPassword) {
      alert("passwords don't match")
      return
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password)

      await createUserProfileDocument(user, { displayName })
      // this.setState({
      //   displayName: '',
      //   email: '',
      //   password: '',
      //   confirmPassword: ''
      // })

    } catch (error) {
      console.log(error)
    }
  }

  const handleChange = (e) => {
    const { value, name } = e.target
    setInputValue({ ...inputValue, [name]: value })
  }



  return (
    <div className='sign-up'>
      <h2 className="title">I do not have a account</h2>
      <span>Sign Up with your email and password</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleChange}
          label="Display Name"
          required
        />
        <FormInput
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          label="Email"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          label="Password"
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
          label="Confirm Password"
          required
        />
        <Button type="submit">Sign Up</Button>

      </form>

    </div>
  )
}

