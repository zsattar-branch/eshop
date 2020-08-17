import React from 'react'
// import './Homepage.scss'
import '../components/directory/Directory'
import Directory from '../components/directory/Directory'
import {HomepageContainer} from './Homepage.styles'

function Homepage() {
  return (
    <HomepageContainer>
      <Directory />
    </HomepageContainer>
  )
}
export default Homepage