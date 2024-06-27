import React from 'react'
import { Link } from 'react-router-dom'
import { useStore } from '../store/store'

function Navbar() {
  const {favorites} = useStore();
  return (
    <nav>
        <ul>
            <li><Link to="Anasayfa">Anasayfa</Link></li>
            <li><Link to="/users">Users</Link></li>
            <li><Link to={"/favorites"}>Favorites ({favorites.length})</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar