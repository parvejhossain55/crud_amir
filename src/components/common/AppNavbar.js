import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

const AppNavbar = () => {
    return (
        <div>
            <Navbar
                collapseOnSelect
                expand="lg"
                bg="light"
                variant="light"
                className="shadow-sm"
            >
                <Container>
                    <Navbar.Brand href="/">
                        <i className="fa-brands fa-atlassian"></i> CRUD APP
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto"></Nav>
                        <Nav>
                            {/* <Nav.Link href="/create">Create</Nav.Link>
                            <Nav.Link href="/update/:id">Update</Nav.Link> */}
                            <Link className="nav-link" to="create">
                                Create
                            </Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default AppNavbar;
