import React, { useEffect, useState } from "react";
import BookCard from "../components/Card";
import { useFirebase } from "../context/FirebaseContext";
import CardGroup from "react-bootstrap/CardGroup";
// import  "../App.css";


const ViewOrder = () => {
  const firebase = useFirebase();
  const [books, setBooks] = useState([]);

  useEffect(() => {
    if (firebase.isLoggedIn)
      firebase
        .fetchMyBooks(firebase.user.uid)
        ?.then((books) => setBooks(books.docs));
  }, [firebase]);

  if (!firebase.isLoggedIn) return <h1>please log in </h1>;
  return (
    <CardGroup className="products">
      <div className="box-container">

      {books.map((book) => {
        return (
          <BookCard
            link={`/books/orders/${book.id}`}
            btnText="Check orders"
            key={book.id}
            id={book.id}
            {...book.data()}
          />
        );
      })}
      </div>


    </CardGroup>
  );
};

export default ViewOrder;
