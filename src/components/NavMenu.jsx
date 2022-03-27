import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import Switch from 'react-switch';
import { useSelector, useDispatch } from 'react-redux';
import { update } from '../app/toggleMode';

const NavMenu = () => {

    const mode = useSelector((state) => state.darkMode.value)
    const dispatch = useDispatch()

    return (
        <div>
            <Navbar collapseOnSelect expand='md' bg={mode ? 'dark' : 'light'} variant={mode ? 'dark' : 'light'}>
                <Container>
                    <Navbar.Brand href="/" className={` ${mode ? "text-white" : "text-dark"} text-weight-bold text-uppercase`}>Yee Choong</Navbar.Brand>
                    <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                    <Navbar.Collapse id='responsive-navbar-nav' className="justify-content-end">
                        <Nav className="ml-auto">
                            <Nav.Link href='/' className={mode ? '' : 'text-dark'} >About Me</Nav.Link>
                            <Nav.Link href='/resume' className={mode ? '' : 'text-dark'}>Resume</Nav.Link>
                            <Nav.Link href='/projects' className={mode ? '' : 'text-dark'}>Projects</Nav.Link>
                            <Switch checked={mode} onChange={() => dispatch(update())} uncheckedIcon={<div
                                style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    height: "100%",
                                    fontSize: 15,
                                    color: "orange",
                                    paddingRight: 2
                                }}>🌞</div>}
                                checkedIcon={<div
                                    style={{
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        height: "100%",
                                        fontSize: 15,
                                        color: "orange",
                                        paddingRight: 2
                                    }}>🌙</div>}
                                onColor={"#808080"} offColor={"#808080"} className="mx-1 my-1" />
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div >
    );
}

export default NavMenu;
