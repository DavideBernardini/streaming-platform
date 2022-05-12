import React from "react";
import { Navbar, Container, Form,  Nav, Button } from "react-bootstrap"
import { Globe } from "react-bootstrap-icons";

const Navigatore = () => {
    return (
        <Navbar bg="none" expand="lg">
            <Container fluid>
                <Navbar.Brand><img style={{ width: "250px", height: "auto" }} src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >

                    </Nav>
                    <Form className="d-flex m-4">
                        <Form.Select  aria-label="Default select example">
                            <option>Italiano</option>
                            <option value="1"><Globe/>English</option>
                        </Form.Select>
                        <Button className="mx-4" variant="danger">Accedi</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigatore