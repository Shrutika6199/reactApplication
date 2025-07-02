import React, { useState } from 'react'
import { bookinfo } from './bookinfo'

const UseStateArrayOfObject = () => {
    const [books,setBook]=useState(bookinfo);
    //console.log(books);
    var removeBook=(bid)=>{
       var balanceBooks= books.filter((book)=>{
            return book.id!==bid
        })
        setBook(balanceBooks);
    }
  return (
    <div>
      <table>
        <thead>
            <th>Book ID</th>
            <th>Book Title</th>
            <th>Book Image</th>
            <th>Book Author </th>
        </thead>
        <tbody>
            {books.map((book)=>{
                var {id,title,imgPath,author}=book;
                return(
                    <tr key={id}>
                        <td>{id}</td>
                        <td>{title}</td>
                        <td><img src={imgPath} alt="not fount" width="100px" height="100px"/></td>
                        <td>{author}</td>
                        <td><button onClick={()=>{removeBook(id)}}>RemoveBook</button></td>
                    </tr>
                )
            })}
        </tbody>
      </table>
    </div>
  )
}

export default UseStateArrayOfObject