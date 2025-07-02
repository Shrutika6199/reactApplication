import React from 'react'

// var title="All The Things I Say to God"
// var imgPath="https://m.media-amazon.com/images/I/81Eaep6Ls7L._SY385_.jpg"
// var author="Tanner Olson"
// var sampleObj={id:1,name:"scott"}
// var sampleArray=[{id:1,name:"abc"},{id:2,name:"harry"}]
const BookList = () => {
  return (
    <div className="booklist">
      {/* <h1>Welcome to my own book store</h1> */}
      <Book title="All The Things I Say to God" imgPath="https://m.media-amazon.com/images/I/81Eaep6Ls7L._SY385_.jpg" author="Tanner Olson" genre="workship">Book 1</Book>
      <Book title=" Ultimate Summer " imgPath="https://m.media-amazon.com/images/I/71x-QNvopLL._SY342_.jpg" author="IXL Learning " >Book 2</Book>
      <Book title="Captivating Stories for Curious Kids" imgPath="https://m.media-amazon.com/images/I/71xUn61OIgL._SY466_.jpg" author="Chris Munoz" >Book 3</Book>
       <Book title="Buddhist Stories for Kids:" imgPath="https://m.media-amazon.com/images/I/51HpHeXmc1L._SX342_SY445_.jpg" author="Laura Burges " >Book 4</Book>
        <Book title="Ramayana" imgPath="https://m.media-amazon.com/images/I/91uEEoG6UBL._SY342_.jpg" author=" Arshia Sattar" genre="Mythology">Book 5</Book>
        
    </div>
  )
}
const Book=(props)=>{
  console.log(props);//props are object form
  var {title,imgPath,author,children,genre}=props;
    return(
        <article className="book">
          {/* <h2>{sampleObj.id}</h2>
          <h2>{sampleObj.name}</h2>
          <h2>{sampleArray[0].id}</h2>
          <h2>{sampleArray[1].id}</h2> */}
          {children}
          {genre}
         <h1 style={{color:"black",backgroundColor:"bisque",width:"fit-content",fontSize:"0.75rem"}}>{title}</h1>
        <img src={imgPath} alt="not found"/>
        <h4>{author}</h4> 
        </article>
    )
}
export default BookList