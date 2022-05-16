import React from "react";
import { Navbar, Container, Form,  Nav, Button } from "react-bootstrap"
import { Globe } from "react-bootstrap-icons";
import { Outlet, Link } from "react-router-dom";


const Navigatore = () => {
    return (
        <>
        <Navbar bg="none" expand="lg" className="flex-nowrap">
            <Container fluid>
                <Navbar.Brand><h1 className="ms-0 ms-sm-3 ms-md-5 titolo " style={{ width: "300px", height: "auto", color:"#198754" }}>GreenStream</h1></Navbar.Brand>
                <ul>
                    <li>
                        <Link to="/mainPage">Movie & Series</Link>
                    </li>
                </ul>
                <div id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                    </Nav>
                    <Form className="d-flex m-4">
                        <Form.Select  aria-label="Default select example" style={{ minWidth: '110px' }}>
                            <option>Italiano</option>
                            <option value="1"><Globe/>English</option>
                        </Form.Select>
                        <Button id="btn-access" className="ms-2 mx-md-4 px-3" variant="success">Accedi</Button>
                    </Form>
                </div>
            </Container>
        </Navbar>
        <Outlet />
        </>
    )
}

export default Navigatore