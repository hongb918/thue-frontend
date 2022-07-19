import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { LinkContainer } from 'react-router-bootstrap'

function Header() {
    return (
        <header>
            <Navbar bg="light" expand="lg">
                <Container>
                    <LinkContainer to='/'>
                        <Navbar.Brand >Thuê</Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <LinkContainer to='/login'>
                                <Nav.Link><i className='fas fa fa-user animated faa-slow'></i></Nav.Link>
                            </LinkContainer>
                            <LinkContainer to='/cart'>
                                <Nav.Link><i className='fas fa-shopping-cart'></i></Nav.Link>
                            </LinkContainer>
                            <NavDropdown title="Rooms" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <form class="d-flex">
                            <input class="form-control me-sm-2" type="text" placeholder="Search" />
                            <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header