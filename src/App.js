import React, { Component } from 'react'
import './App.css'
import { Switch, Route } from 'react-router-dom'
import Homepage from './pages/Homepage.jsx'
import Shop from './pages/shop/Shop.jsx'
import Header from "./components/header/Header.jsx"
import SignInAndSignUp from './pages/sign-in-and-sign-up/SignInAndSignUp.jsx'
import { auth } from './firebase/firebase'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user })
      console.log(user)
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={Shop} />
          <Route path="/signin" component={SignInAndSignUp} />
        </Switch>
      </div>
    )
  }
}


