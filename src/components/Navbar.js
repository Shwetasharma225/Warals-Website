import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link as ScrollLink } from 'react-scroll';
import { Link } from 'react-router-dom';

const CustomNavbar = () => {
  return (
    <Navbar bg="light" variant="dark" expand="lg" className="custom-navbar" style={{ position: 'fixed', top: '0', width: '100%', zIndex: '100' }}>
      <img
        style={{ height: '70px', width: 'auto', marginRight: '20px' }}
        src={require('../components/assets/warals logo.png')}
        alt="banding"
      />
      <Navbar.Toggle aria-controls="navbar-nav" />
      <Navbar.Collapse id="navbar-nav">
        <Nav className="mx-auto" style={{ fontSize: '18px', marginLeft: '85px',color:'black' }}>
          {/* Use ScrollLink for smooth scrolling */}
          <Link to="/" className="nav-link" style={{color:'black',margin: '0 20px' }}>Home</Link>

          <ScrollLink
            to="container"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            style={{cursor:'pointer',margin: '0 20px',padding:'4px' }}
            
          >
            About
          </ScrollLink>

          <NavDropdown title="Products" id="basic-nav-dropdown" style={{ backgroundColor: 'black' }}>
  <Link to="/institute" className="dropdown-item" style={{ color: 'black' }}>
    Institute Management System
  </Link>
  <Link to="/school" className="dropdown-item" style={{ color: 'black' }}>
    School Management System
  </Link>
  <Link to="/learning" className="dropdown-item" style={{ color: 'black' }}>
    Learning Management System
  </Link>
  {/* You can add more items here as needed */}
</NavDropdown>


          <ScrollLink
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            style={{cursor:'pointer',margin: '0 20px',padding:'4px' }}
          >
            Contact
          </ScrollLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavbar;
