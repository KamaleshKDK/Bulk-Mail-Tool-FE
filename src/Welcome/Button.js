import { Link } from 'react-router-dom'
import React from 'react'
import './button.css'
function Button() {
  return (
  <Link to="/bulk-mailer"><button class="btn">LET's GO</button></Link>
  )
}

export default Button;