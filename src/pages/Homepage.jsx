import React from 'react'
import './Homepage.scss'
import '../components/directory/Directory'
import Directory from '../components/directory/Directory'

function Homepage() {
  return (
    <div className="homepage">
      <Directory />
    </div>
  )
}
export default Homepage