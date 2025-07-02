import React, { createContext, useContext, useState } from 'react'
import { bookinfo } from '../../bookinfo';
const BooksContainer=createContext();
const ContextBooks = () => {
var [books,setBooks]=useState(bookinfo);
//console.log(books);
var removeBook=(id)=>{
var remaningBooks=books.filter((book)=>{
return book.id!==id;
})
setBooks(remaningBooks);
}
return (
<div>
<BooksContainer.Provider value={{books,removeBook}}>
<List2/>
</BooksContainer.Provider>
</div>
)
}
const List2=()=>{
var  {books}=useContext(BooksContainer);
return(
<div>
{books.map((book)=>{
return <SingleBook2 key={book.id} book={book}/>
})}
</div>
)
}
const SingleBook2=({book})=>{
var {removeBook}=useContext(BooksContainer);
var {id,title,author,genre,imgPath}=book;
return(
<div>
<h1>{id}-{title}</h1>
<i>{genre}</i>
<h3>{author}</h3>
<img src={imgPath} alt="not found"/>
<button onClick={()=>{removeBook(id)}}>REMOVE BOOK</button>
</div>
)
}
export default ContextBooks