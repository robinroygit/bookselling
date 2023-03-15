import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useFirebase } from "../context/FirebaseContext";
import { Link, useNavigate } from "react-router-dom";
import logoImg from "../assets/images/logoimg.png";
import glogo from "../assets/images/icon-google.png"

const RegisterPage = () => {
  const firebase = useFirebase();
  // signUp fuction from firebase
  const { signupWithEP, isLoggedIn} = firebase;
  const navigate = useNavigate();

  const [firstName,setFisrtName] = useState('');
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassord] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    signupWithEP(email, password);
  };

  useEffect(() => {
    if (isLoggedIn) {
      // nagivate to home
      navigate("/");
    }
  }, [isLoggedIn, navigate]);

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

      {/* //my design */}
      <Form onSubmit={handleSubmit}>
      <div className="loginpagebg">
        <div className="innerpart">
          <h1 className="cName">the book store</h1>
          <img src={logoImg} alt="logoImg" />
          <div className="rightpart">
            <h1 className="create-account">Create Account</h1>
      <Form.Group className="mb-3" controlId="formBasicPassword">
               
            <div className="all-input">
              <div className="firstlast">
                <div className="inputField">
                  <Form.Label className="inputs">First Name</Form.Label>
                  <Form.Control
                    style={{ fontSize: "1.5rem" }}
                    type="text"
                    onChange={(e) => setFisrtName(e.target.value)}
                    value={firstName}
                  />
                </div>
                <div className="inputField">
                  <Form.Label className="inputs">Last Name</Form.Label>
                  <Form.Control
                    style={{ fontSize: "1.5rem" }}
                    type="Text"
                    onChange={(e) => setLastName(e.target.value)}
                    value={lastName}
                  />
                </div>
                <div className="inputField">
                  <Form.Label className="inputs">Email</Form.Label>
                  <Form.Control
                    style={{ fontSize: "1.5rem" }}
                    type="Text"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                  />
                </div>
                <div className="inputField">
                  <Form.Label className="inputs">Password</Form.Label>
                  <Form.Control
                    style={{ fontSize: "1.5rem" }}
                    type="Text"
                    onChange={(e) => setPassord(e.target.value)}
                    value={password}
                  />
                </div>
              </div>

            </div>
            </Form.Group>


            <div className="or-btn">
              <Button type="submit" className="acc-btn">Create Account</Button>

              <span>
                Already have an Account? <Link to="/login">Log In</Link>{" "}
              </span>

              <div className="line">
                <div></div>
                <p>OR</p>
                <div></div>
              </div>
            </div>

            <div className="google"> 
            
            <img src={glogo} alt="googleimg" />
            <div>
            Sign Up with Google
            </div>
            </div>



          </div>
        </div>
      </div>


     

      </Form>
     
     


    </div>
  );
};

export default RegisterPage;
