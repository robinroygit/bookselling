import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useFirebase } from "../context/FirebaseContext";
import FormatPrice from "./FormatPrice";
import { useNavigate } from "react-router-dom";

const BookCard = (props) => {
  const [url, setUrl] = useState(null);
  const firebase = useFirebase();
  const nevigate = useNavigate();

  const {
    name,
    isbn,
    price,
    imageURL,
    // userID,
    // userEmail,
    // diplayName,
    // photoURL,
  } = props;

  useEffect(() => {
    firebase.getImageUrl(imageURL).then((url) => setUrl(url));
  }, [firebase, imageURL]);

  return (
    <div>
    
      <Card className="myCard mt-4">
        <img src={url} alt="books" className="image w-100 object-fit-contain" />

        <Card.Body>
          <Card.Title className="title">{props.name}</Card.Title>
          <Card.Text className="text">
            this book is written by {name} and isbn number is {isbn}
            and the price of this book is <FormatPrice price={price} />
          </Card.Text>

          <Button
            variant="success"
            className="btn"
            onClick={() => nevigate(props.link)}
          >
            {props.btnText || "View"}
          </Button>
        </Card.Body>
      </Card>

    </div>
  );
};

export default BookCard;
