import React from 'react'
import './App.css'
import { Switch, Route } from 'react-router-dom'
import Homepage from './pages/Homepage.jsx'
import Shop from './pages/shop/Shop.jsx'

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Homepage}/>
        <Route path="/shop" component={Shop}/>
      </Switch>
    </div>
  )
}


export default App 