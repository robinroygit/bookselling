import React, { useEffect, useState } from "react";
import BookCard from "../components/Card";
import { useFirebase } from "../context/FirebaseContext";
import Hero from "../components/Hero";

// import  "../App.css"

const Homepage = () => {
  const [books, setBooks] = useState([]);

  const firebase = useFirebase();
  useEffect(() => {
    firebase.listAllBooks().then((data) => setBooks(data.docs));
  }, [firebase]);

  return (
    <>
     
     <Hero/>

      <div className="container d-flex justify-content-center h-100 ">

        <div className="row">
        {books.map((book, index) => {
              return <div className="col-md-4" key={book.id}>
                <BookCard

                link={`/book/view/${book.id}`}
                
                id={book.id}
                {...book.data()}
              />
              </div>
            })}

        </div>

            
        
      </div>
    </>
  );
};

export default Homepage;
