import React, { useState } from 'react'
import productsInfo from './productinfo'
import Singleproduct from './Singleproduct';
import { Link } from 'react-router-dom';

const Product = () => {
  var [items,setItems]=useState(productsInfo);
  //console.log(items);
  return (
    <div className='product-container' style={{width:"1300px",height:"500px",backgroundColor:"orange"}}>
      {items.map((item)=>{
        return (
          <div>
            <h1>{item.name}</h1>
            <Link to={`/products/${item.id}`}>click here for more info...</Link>
          </div>
        )
      })}  
    </div>
  )
}

export default Product