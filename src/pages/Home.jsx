import React, { useEffect, useState } from 'react'
import BookCard from '../components/Card';
import { useFirebase } from '../context/FirebaseContext'
import CardGroup from 'react-bootstrap/CardGroup';
import HomeImage from "../assets/images/heading-bg.webp";
import  "../App.css"


const Homepage = () => {
    const [books,setBooks] = useState([]);

    const firebase = useFirebase();
    
    
    
    useEffect(()=>{
        firebase.listAllBooks().then((data)=>setBooks(data.docs));
    },[firebase])



  return (
    <>
    
      <div className='home-image'> <img src={HomeImage} alt="" /> </div>
    <CardGroup className='products' >
        <div className='box-container'>

        {books.map((book, index)=>{return <BookCard link={`/book/view/${book.id}`} key={book.id} id={book.id} {...book.data()} />})}
        </div>
        
    </CardGroup>
    </>
   
  )
}

export default Homepage