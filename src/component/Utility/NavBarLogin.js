import React from 'react'
import logo from '../../imeges/logo.png';
import login from '../../imeges/login.png';
import cart from '../../imeges/cart.png';


import { Container, Form, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
function NavBarLogin() {
  return (
    <Navbar expand="lg" bg='dark' data-bs-theme="dark">
      <Container fluid>
        <Link className='navbar-brand' style={{width: '10%', textAlign:'center'}} to="/">
          <img style={{height: '50px'}} src={logo} alt=''></img>
        </Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Form className="d-flex" style={{width: "100%"}}>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
          </Form>
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px', display: 'flex' }}
            navbarScroll
          >
            <Link className='nav-link' style={{color :'white', display: 'flex', alignItems: 'center'}} to="/login">
              <img style={{width:'30px', paddingRight : '10px'}} src={login} alt=''></img>
              Login</Link>
            <Nav.Link style={{color :'white', display: 'flex', alignItems: 'center'}} href="#action2">
              <img style={{width:'30px', paddingRight : '10px'}} src={cart} alt=''></img>
              Cart</Nav.Link>

          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBarLogin;