import React, { Component } from 'react'
import './App.css'
import { Switch, Route, Redirect } from 'react-router-dom'
import { createStructuredSelector } from 'reselect'
import Homepage from './pages/Homepage.jsx'
import Shop from './pages/shop/Shop.jsx'
import Checkout from './pages/checkout/Checkout.jsx'
import Header from "./components/header/Header.jsx"
import ContactPage from './pages/contact-page/Contact-Page'
import SignInAndSignUp from './pages/sign-in-and-sign-up/SignInAndSignUp.jsx'
import { auth, createUserProfileDocument } from './firebase/firebase'
import { connect } from 'react-redux'
import { setCurrentUser } from './redux/user/user.actions'
import { selectCurrentUser } from './redux/user/user.selector'
// import { selectCollectionForPreview } from './redux/shop/shop.selector'

class App extends Component {


  unsubscribeFromAuth = null

  componentDidMount() {

    const { setCurrentUser } = this.props
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          })
          // console.log(this.state)
        })
      }
      setCurrentUser(userAuth)
      // addCollectionAndDocuments('collections', collectionsArray.map(({title, items}) => ({title, items})))
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={Shop} />
          <Route path='/contact' component={ContactPage}/>
          <Route path="/checkout" component={Checkout} />
          <Route exact path="/signin" render={() => this.props.currentUser ? (<Redirect to='/' />) : (<SignInAndSignUp />)} />
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps)
  (App)
