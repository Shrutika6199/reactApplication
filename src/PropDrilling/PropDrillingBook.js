import React, { useState } from 'react'
import { bookinfo } from '../bookinfo';

const PropDrillingBook = () => {
var [books,setBooks]=useState(bookinfo);
var removeBook=(id)=>{
var remaningBooks=books.filter((book)=>{
return book.id!==id;
})
setBooks(remaningBooks);
}
return (
<div>
<List books={books} removeBook={removeBook}/>
</div>
)
}
const List=({books,removeBook})=>{
return(
<div>
{books.map((book)=>{
return <SingleBook key={book.id} removeBook={removeBook} book={book}/>
})}
</div>
)
}
const SingleBook=({book,removeBook})=>{
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
export default PropDrillingBook

