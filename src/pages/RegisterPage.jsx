
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useFirebase } from "../context/FirebaseContext";
import { useNavigate } from "react-router-dom";


const RegisterPage = () => {
  const firebase = useFirebase();
  // signUp fuction from firebase
  const { signupWithEP, isLoggedIn } = firebase;
  const navigate = useNavigate();


  const [email, setEmail] = useState("");
  const [password, setPassord] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    signupWithEP(email, password)
  };

  useEffect(()=>{
    if(isLoggedIn){
       // nagivate to home 
       navigate("/")
   
    }
    },[isLoggedIn,navigate])

  return (
    <div className="container mt-5">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>

        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => setPassord(e.target.value)}
            value={password}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Create Account
        </Button>
      </Form>
    </div>
  );
};

export default RegisterPage;
