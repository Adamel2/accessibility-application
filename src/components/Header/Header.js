import React from "react";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
function Header() {
  return (
    <div className="col-12">
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/accessibility-application">Restaurant</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link className="btn btn-light text-dark m-1" href="/accessibility-application/menu">Menu</Nav.Link>
          {/* <Nav.Link className="btn btn-light text-dark m-1" href="/accessibility-application/myOrder">My Order</Nav.Link> */}
          <Nav.Link className="btn btn-light text-dark m-1">accessibility</Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
}
export default Header;
