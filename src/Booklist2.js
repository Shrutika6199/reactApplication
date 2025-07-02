import React from 'react'
import { bookinfo } from './bookinfo'

const BookList2 = () => {
  return (
    <div className="booklist">
      {/* <h1>Welcome to my own book store</h1> */}
      
      {bookinfo.map((bookInfo)=>{
        var {id,title,genre,imgPath,author}=bookInfo
        return(
          // <Book2 key={id} title={title} genre={genre} imgPath={imgPath} author={author} ></Book2>
          <Book2 key={id} {...bookInfo}></Book2>
        )
      })}
    </div>
  )
}
const Book2=(props)=>{
  console.log(props);//props are object form
  var {title,imgPath,author,genre}=props;
  var alertClick=()=>{
    alert("Hello world-external function without parameter");
  }
  var displayNum=(n)=>{
    alert(n+"num deslayed from external function call");
  }
    return(
        <article className="book">
         
          {genre}
         <h1 style={{color:"black",backgroundColor:"bisque",width:"fit-content",fontSize:"0.75rem"}}>{title}</h1>
        <img src={imgPath} alt="not found"/>
        <h4>{author}</h4>
        <button onClick={alertClick}>click me to get 
          an alert!</button> 
          <button onClick={()=>{alert("alert inline function")}}>click</button>
          <button onClick={()=>{displayNum(5)}}>supply num 5</button>
        </article>
    )
}
export default BookList2;