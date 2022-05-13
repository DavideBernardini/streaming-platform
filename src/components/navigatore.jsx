import React from "react";
import { Navbar, Container, Form,  Nav, Button } from "react-bootstrap"
import { Globe } from "react-bootstrap-icons";

const Navigatore = () => {
    return (
        <Navbar bg="none" expand="lg" className="flex-nowrap">
            <Container fluid>
                <Navbar.Brand><img className="ms-3 ms-md-5" style={{ width: "200px", height: "auto" }} src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" /></Navbar.Brand>
                
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
                        <Button id="btn-access" className="ms-2 mx-md-4 px-3" variant="danger">Accedi</Button>
                    </Form>
                </div>
            </Container>
        </Navbar>
    )
}

export default Navigatore