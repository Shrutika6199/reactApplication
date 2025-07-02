import React from 'react'
import { Link, useParams } from 'react-router-dom';
import productinfo from './productinfo';

const SingleProduct = () => {
  var {productId}=useParams();
 var item= productinfo.find((product)=>{
    return product.id===productId;
  })
  var {id,name,price,image}=item;
  return (
    <div className='product-item' style={{width:"400px",height:"auto",backgroundColor:"brown"}}>
      <h1>ID:{id}</h1>
      <h2>Name of the product:{name}</h2>
      <h3><i>Price:Rs.{price}</i></h3>
      <img style={{width:"100px",height:"100px"}} src={image} alt="not found" />
      <Link to='/products'>GO TO PRODUCTS PAGE</Link>
    </div>
  )
}

export default SingleProduct