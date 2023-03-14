
import React, {  useState } from 'react'
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import { useFirebase } from '../context/FirebaseContext';

const ListingPage = () => {


    const firebase = useFirebase()
    const {handleCreateNewListing} = firebase;


    const [name,setName] = useState("");
    const [isbnNumber,setIsbnNumber] =useState("");
    const [price,setPrice] =useState("");
    const [coverPic,setCoverPic] = useState("");


    const handleSubmit = async (e)=>{
         e.preventDefault();
        await handleCreateNewListing(name,isbnNumber,price,coverPic);
        alert("submited");
        window.location.reload();

    }


  return (
    <div className="container mt-5">

    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Book Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="book name"
          onChange={(e) => setName(e.target.value)}
          value={name }
        />
       
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>ISBN</Form.Label>
        <Form.Control
          type="text"
          placeholder="ISBN Number"
          onChange={(e) => setIsbnNumber(e.target.value)}
          value={isbnNumber}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Price</Form.Label>
        <Form.Control
          type="number"
          placeholder="Enter Price"
          onChange={(e) => setPrice(e.target.value)}
          value={price}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Files</Form.Label>
        <Form.Control
          type="file"
          onChange={(e) => setCoverPic(e.target.files[0])}
        />
      </Form.Group>



      <Button variant="primary" type="submit" >
        Create
      </Button>

    </Form>
  </div> 
  )
}

export default ListingPage; 