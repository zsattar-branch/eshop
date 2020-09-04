import React from 'react'
import './Footer.scss'
import { Link } from 'react-router-dom'
import LinkedIn from '../../images/linkedin.png'
import GitHub from '../../images/github.jpeg'

const Footer = () => {
  return (
    <div className="footer">
      <div className="my-name">&copy; Zain Sattar 2020</div>
      <div className="link-tag">
      <div className="github">
        <Link to={{ pathname: "https://github.com/zainsattar18" }} target="_blank" > <img src={GitHub} alt="github" width="20px" /></Link>
      </div>
      <div className="linkedin">
        <Link to={{ pathname: "https://www.linkedin.com/in/zain-sattar-0368611b0" }} target="_blank" > <img src={LinkedIn} alt="linkedin" width="20px" /></Link>
      </div>
      </div>
    </div>
  )
}
export default Footer