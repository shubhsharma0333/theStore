import React from 'react'
import {HiHome} from "react-icons/hi"
import {AiFillHeart} from "react-icons/ai"
import {HiShoppingCart} from "react-icons/hi"
import {FaUserAlt} from "react-icons/fa"
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div className='navBar'>
        <h1 className='hNav'>The Store</h1>
        <Link to={"/"}>
          <button className='nav'>Home <HiHome /></button>
        </Link>
        <Link to={"/favorites"}>
          <button className='nav'>Favorites <AiFillHeart /></button>
        </Link>
        <Link to={"/cart"}>
          <button className='nav'>Cart <HiShoppingCart /></button>
        </Link>
        <Link to={"/account"}>
          <button className='nav lastNav'>Account <FaUserAlt /></button>
        </Link>
    </div>
  )
}

export default Header