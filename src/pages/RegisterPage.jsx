import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useFirebase } from "../context/FirebaseContext";
import { Link, useNavigate } from "react-router-dom";
import logoImg from "../assets/images/logoimg.png";
import registerimg from "../assets/images/registerimg.svg";
import google from "../assets/images/icon-google.png"

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
    <div className=" register">
      <h1>dhfjshf</h1>
    
      {/* //my design */}
      <Form onSubmit={handleSubmit}>
      <div className="loginpagebg ">
        <div className="innerpart position-relative ">
          <img src={registerimg} alt="registerimg" className=" position-absolute registerimg " />
          <h1 className="cName">the book store</h1>
          <img className="img3d " src={logoImg} alt="logoImg" />
          <div className="rightpart">
            <h1 className="create-account">Create Account</h1>
      <Form.Group className="mb-3" controlId="formBasicPassword">
               
            <div className="all-inputs">
              <div className="firstlast ">
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

              <span className="already">
                Already have an Account? <Link to="/login">Log In</Link>{" "}
              </span>

              <div className="line">
                <div></div>
                <p>OR</p>
                <div></div>
              </div>
            </div>

            <div className="google"> 
            
            <img src={google} alt="googleimg" />
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
