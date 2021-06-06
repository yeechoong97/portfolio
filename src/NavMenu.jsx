import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

function NavMenu() {
    return ( 
        <div>
            <Navbar collapseOnSelect fixed='top' expand='md' bg='dark' variant='dark' style={{fontFamily:"Cabin,Helvetica Neue,Helvetica,Arial,sans-serif"}}>
                <Container>
                <Navbar.Brand href="/" className="text-weight-bold text-uppercase">
                        <img alt="" src="https://res.cloudinary.com/fyp202105/image/upload/v1622960411/Portfolio/Workflow.png" width="30" height="30" className="d-inline-block align-top mr-2"/>
                            Yee Choong</Navbar.Brand>
                    <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                    <Navbar.Collapse id='responsive-navbar-nav'>
                        <Nav className="ml-auto">
                            <Nav.Link href='/'>About Me</Nav.Link>
                            <Nav.Link href='/resume'>Resume</Nav.Link>
                            <Nav.Link href='/projects'>Projects</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default NavMenu;
