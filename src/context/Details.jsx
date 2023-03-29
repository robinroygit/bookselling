import React, { useEffect, useState } from 'react'
import Button from "react-bootstrap/Button";
import { useParams } from 'react-router-dom'
import FormatPrice from '../components/FormatPrice';
import { useFirebase } from './FirebaseContext';
import Form from "react-bootstrap/Form";


const Details = () => {
    const params = useParams(); 
    const firebase = useFirebase();

  const [qty,setQty] = useState(1);
  const [time,setTime] = useState("");
    const [data,setData] = useState(null);
    const [url,setUrl] = useState(null)

    // order placed function 
    const placeOrder = async ()=>{
      setTime(new Date().toLocaleDateString())
      const result = firebase.placeOrder(params.bookId, qty,time)
      console.log(result);
      alert("successfully ordered")
      
      
    }
    

  useEffect(()=>{
    firebase.getBookId(params.bookId).then(value=>setData(value.data()))
  },[firebase,params.bookId]);

useEffect(()=>{
  if(data){
   const imageURL = data.imageURL ;
    firebase.getImageUrl(imageURL).then((url)=>setUrl(url));  
  }
},[firebase,data])

  if(data===null){
    return <h1>Loading......</h1>
  }

  return (
    <div className='container details '>
      <h1 className='mt-5'>{data.name}</h1>
        <img src={url} alt="bookimage" />
        <h2>Details</h2>
        <h4>price: <FormatPrice price={data.price} /></h4>
        <h2>Owner Detail</h2>
        {/* <img src={data.photoURL} alt="photoUrl" /> */}
        <p>Name: {data.diplayName}</p>
        <p>Email: {data.userEmail}</p> 
        <Form.Label>qty</Form.Label>
          <Form.Control
            className='w-25'
            type="number"
            placeholder="enter quantity"
            onChange={(e) => setQty(e.target.value)}
            value={qty}
          />
        <Button variant="success" onClick={placeOrder} >buy now</Button>
    </div>
  )
}

export default Details