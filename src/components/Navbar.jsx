
import React from 'react'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/esm/Button';
import Navbar from 'react-bootstrap/Navbar';
import { useFirebase } from '../context/FirebaseContext';
import { Link } from 'react-router-dom';
import  "../App.css"


const MyNavbar = () => {
  const firebase = useFirebase()
  const signOut = ()=>{
    firebase.logout();

  }

  // mb-5 m-lg-1 
  return (

    <>
    <Navbar  bg="light" variant="light" >
    <Container className=' main-nav ' >
      <Navbar.Brand href="#home" className='mylogo'> BOOKS</Navbar.Brand>
      <nav className='navs' >
        <Link className='mynav' to="/">Home</Link>
        <Link className='mynav' to="/book/list">Add Listing</Link>
        <Link className='mynav' to="/book/orders">Orders</Link>
        <Link className='mynav' to="/login">Login</Link>
        <Link className='mynav' to="/register">Register</Link>
        <Link className='mynav' to='/'><Button onClick={signOut}>Logout</Button></Link>
      </nav>
      </Container>
      </Navbar>
    
    </>
  

  )
}

export default MyNavbar