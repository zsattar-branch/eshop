import React, { Component } from 'react'
import FormInput from '../form_input/FormInput'
import Button from '../button/Button'
import "./SignIn.scss"

export default class SignIn extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.setState({
      email: '',
      password: ''
    })
  }

  handleChange = (e) => {
    const { value, name } = e.target
    this.setState({
      [name]:value
    })
  }

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign In with you email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            value={this.state.email}
            handleChange={this.handleChange}
            label="email"
            required />
          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            handleChange={this.handleChange}
            label="password"
            required />
          
          <Button type="submit" >Sign In</Button>
        </form>

      </div>
    )
  }
}
