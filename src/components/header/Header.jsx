import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../images/crown.svg'
import './Header.scss'

export default function Header() {
  return (
    <div className="header">
      <Link to="/" className="logo-container">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/contact">
          CONTACT
        </Link>
      </div>

    </div>
  )
}
