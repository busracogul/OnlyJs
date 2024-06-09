import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav>
        <ul>
            <li><Link to="Anasayfa">Anasayfa</Link></li>
            <li><Link to="/users">Users</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar