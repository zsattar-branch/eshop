import React, { useState } from 'react'
import FormInput from '../form_input/FormInput'
import Button from '../button/Button'
import "./SignIn.scss"
import { auth, signInWithGoogle } from '../../firebase/firebase'

export default function SignIn() {
  const [inputValue, setInputValue] = useState({ email: '', password: '' })

  // const [email, setEmail] = useState('')
  // const [password,setPassword] = useState('')

  const { email, password } = inputValue

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await auth.signInWithEmailAndPassword(email, password)
    }
    catch (error) {
      console.log(error)
    }
  }

  const handleChange = (e) => {
    const { value, name } = e.target
    setInputValue({...inputValue, [name]: value})
  }


  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign In with you email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          value={email}
          handleChange={handleChange}
          label="email"
          required />
        <FormInput
          name="password"
          type="password"
          value={password}
          handleChange={handleChange}
          label="password"
          required />

        <div className="buttons">
          <Button type="submit" >Sign In</Button>
          <Button type="button" onClick={signInWithGoogle} isGoogleSignIn>
            Sign In With Google
              </Button>
        </div>
      </form>

    </div>
  )
}

