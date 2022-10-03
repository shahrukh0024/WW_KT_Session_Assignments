import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import '../App.css';

export default function Navbar() {
  return (
    <nav>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/create'>Signup</NavLink>
      <NavLink to='/read'>Users List</NavLink>
    </nav>
  )
}
