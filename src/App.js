import logo from './logo.svg';
import './App.css';

// function App() {
//   return (
//     <div>
//       <h1>hello</h1>
//       <i>welocme to react</i>
//       <section>
//         <b>nested element</b>
//         <u>underline tag</u>
//       </section>
//     </div>
    
    
//   );
// }
//Anonymous function
// var App=function()
// {
//   return(
//     <h1>welcome to react Anonymous FCB</h1>
//   )
// }
//Arrow function
// var App=()=>{
//   return(
//      <h1>welcome to react Arrow FCB</h1>
//   )
// }
// export default App;
import React, { useState } from 'react'
import BookList from './BookList';
import Booklist2 from './Booklist2';
import Iteration from './Iteration';
import Iteration2 from './iteration2';
import UseStateData from './UseStateData';
import UseStateCounter from './UseStateCounter';
import UseStateArray from './UseStateArray';
import UseStateArrayOfObject from './UseStateArrayOfObject';
import UseEffectChangeName from './UseEffectChangeName';
import WindowResize from './WindowResize';
import Display from './Display';
import AndOrOperator from './AndOrOperator';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './Routing/main';
import Home from './Routing/Home';
import About from './Routing/About';
import PageNotFounf from './Routing/PageNotFound';
import Product from './Routing/product';
import SingleProduct from './Singleproduct';
import ControlledInputForm from './Form/controlledinputform';
import MultipleInputForm from './Form/multipleInputform';
import Login from './Routing/Login';
import Dashboard from './Routing/Dashboard';
import ProtectedRoute from './Routing/ProtectedRoute';
import AllProduct from './ShoppingCart/AllProduct';
import Cart from './ShoppingCart/Cart';
import UseRefHook from './useRed-Example/UseRefHook';
import tempCodeRunnerFile from './Form/tempCodeRunnerFile';
import PropDrillingBook from './PropDrilling/PropDrillingBook';
import ContextBooks from './PropDrilling/ContextAPi/ContextBooks';
import ReducerCounter from './PropDrilling/ContextAPi/UseReducer/ReducerCounter';
import ShareCalc from './Reducer+Context/ShareCalc';
import Hero from './HandlingError/Hero';
import ErrorBoundary from './HandlingError/ErrorBondary';

const App = () => {
  var [user,setUser]=useState({fname:"",mail:""});
  var [cart,setCart]=useState([]);
  return (
    <div>
      
      <Greeting/>
      {/* <BookList2/> */}
      {/* <BookList/>
      <BookList/> */}
      {/* <Iteration/> */}
      {/* <Iteration2/> */}
      {/* <UseStateData/> */}
      {/* <UseStateCounter/> */}
      {/* <UseStateArray/> */}
      {/* <UseStateArrayOfObject/> */}
      {/* <UseEffectChangeName/> */}
      {/* <WindowResize/> */}
      {/* <Display/> */}
      {/* <AndOrOperator/> */}
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main/>}>
              <Route path="home" element={<Home/>}/>
              <Route path="about" element={<About/
            >}/>
            <Route path="products" element={<Product/>}/>
            <Route path="products/:productId" element={<SingleProduct />}/>
            <Route path="/login" element={<Login setUser={setUser}/>}/>
            <Route path="/dashboard" element={<ProtectedRoute user={user}><Dashboard user={user}/></ProtectedRoute>}/>
            <Route path='/allproducts' element={<AllProduct cart={cart} setCart={setCart}/>}/>
            <Route path='/cart' element={<Cart cart={cart} setCart={setCart}/>}/>
            <Route path="*" element={<PageNotFounf/>}/>
            </Route>
          </Routes>
        </BrowserRouter>
        {/* <ControlledInputForm/> */}
        {/* <MultipleInputForm/> */}
        {/* <UseRefHook/> */}
        {/* <PropDrillingBook/> */}
       {/* < ContextBooks/> */}
       {/* <ReducerCounter/> */}
       {/* <ShareCalc/> */}
       {/* <Hero heroName="Batman"/> 
       <Hero heroName="Superman"/> 
       <ErrorBoundary> 
            <Hero heroName="Joker"/> 
      </ErrorBoundary> */}
    </div>
  )
}
export const Greeting=()=>{
  return(
    <>
    <h1>Greeting component says hii!!!</h1>
    </>
  )
}
export default App
