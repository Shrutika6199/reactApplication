import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Main = () => {
  return (
    <div style={{width:"500px",height:"500px",backgroundColor:"cyan"}}>
      {/* <h1 >This is main component</h1> */}
      <Link to="/">MAIN</Link>
      <Link to="/home">HOME</Link>
      <Link to="/about">ABOUT</Link>
      <Link to="/products">PRODUCT</Link>
      <Link to="/login">LOGIN</Link>
       <Link to="/allproducts">PRODUCT-LIST</Link>
       <Link to="/cart">CART</Link>
      <Outlet/>
    </div>
  )
}

export default Main