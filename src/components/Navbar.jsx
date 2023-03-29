import React from "react";
import Button from "react-bootstrap/esm/Button";
import { useFirebase } from "../context/FirebaseContext";
import { Link } from "react-router-dom";
// import  "../App.css"

const MyNavbar = () => {
  const firebase = useFirebase();

  const signOut = () => {
    firebase.logout();
    alert("you are logged out");
  };


  // mb-5 m-lg-1
  return (
    <>

      <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a href="#home" className=" navbar-brand mb-0 h1">
            <img
              className=" d-inline-block align-top"
              width="40px"
              height="40px"
              src="https://www.kindpng.com/picc/m/62-622823_logo-biblia-png-book-logo-png-hd-transparent.png"
              alt="Logo"
            ></img>
           <h1 className="  d-inline-block mx-3"> BOOKSTORE</h1>
          </a>




          <button
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      className="navbar-toggler"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"

      >
          <span className="navbar-toggler-icon"></span>
      </button>

          <div className=" collapse navbar-collapse " id="navbarNav">
            
            <ul className="navbar-nav ml-auto h5 ">
              <li className="nav-item active" ><Link className="nav-link" to="/">Home</Link></li>

              <li className="nav-item" ><Link className="nav-link" to="/book/list">Add Listing</Link></li>

              <li className="nav-item" ><Link className="nav-link" to="/book/orders">Orders</Link></li>

              <li className="nav-item" ><Link className="nav-link" to="/login">Login</Link></li>

              <li className="nav-item" ><Link className="nav-link" to="/register">Register</Link></li>

              <li className="nav-item" ><Link className="nav-link" to="/"><Button onClick={signOut}>Logout</Button></Link></li>

            </ul>


          </div>

      

          </div>
      </nav>


    </>
  );
};

export default MyNavbar;
