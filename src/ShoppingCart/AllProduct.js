import React, { useState } from 'react'
import productsInfo from '../productinfo'
import OneProduct from './OneProduct';

const AllProduct = ({cart,setCart}) => {
    var [items,setItems]=useState(productsInfo);

  return (
    <div>
    {items.map((item)=>{
        return (<OneProduct key={item.id} item={item} cart={cart} setCart={setCart}></OneProduct>)
    })}  
    </div>
  )
}

export default AllProduct