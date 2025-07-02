import React from 'react'

const OneProduct = ({item,cart,setCart}) => {
    var {id,name,price,image}=item;
     var addItemToCart=(item)=>{
        setCart([...cart,item])
     }
     var removeItemFromCart=(item)=>{
        var balanceCartItem=cart.filter((c)=>{
           return c.id!==item.id;
        })
        setCart(balanceCartItem);
     }
  return (
    <div>
      <h1>{name}-{id}</h1>
      <h3><i>Rs.{price}</i></h3>
      <img width='200px' height="100px" src={image} alt="notfound"/>
      {cart.includes(item)?<button onClick={()=>{removeItemFromCart(item)}}>Remove From Cart</button>:<button onClick={()=>{addItemToCart(item)}}>Add To Cart</button>}
      
      
    </div>
  )
}

export default OneProduct