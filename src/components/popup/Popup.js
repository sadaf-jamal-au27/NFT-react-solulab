import React from 'react'
import { Link } from 'react-router-dom'

function Popup() {
  return (
    <div className='popup'>
        <h1>You Are Not Logged In</h1>
        <p className="view-all">Log in first</p>
        <Link to="/login" className="btn btn-secondary" >Login</Link>
    </div>
  )
}

export default Popup