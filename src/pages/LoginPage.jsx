

import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import { useFirebase } from "../context/FirebaseContext";

const LoginPage = () => {
  const firebase = useFirebase();
  const navigate = useNavigate();
  
  // signUp fuction from firebase
  const { signinWithEP,signinWithGoogle, isLoggedIn } = firebase;


  const [email, setEmail] = useState("");
  const [password, setPassord] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    signinWithEP(email, password);
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
          Login
        </Button>
        <h1 className="mt-5 mb-5">or</h1>
        <Button  variant="danger"  onClick={signinWithGoogle }>
          Signin with Google
        </Button>

      </Form>
    </div>
  );
};

export default LoginPage;
