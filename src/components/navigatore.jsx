import React,{useState} from "react";
import { Navbar, Container, Form, Nav, Button,Modal } from "react-bootstrap"
import { Globe } from "react-bootstrap-icons";
import { Outlet, Link } from "react-router-dom";


const Navigatore = () => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Navbar bg="none" expand="lg" className="navbar flex-nowrap top-0 position-fixed w-100 bg-black">
                <Container fluid>
                    <Navbar.Brand><h1 className="ms-0 ms-sm-3 ms-md-5 titolo " style={{ width: "300px", height: "auto", color: "#198754" }}>GreenStream</h1></Navbar.Brand>
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
                            <Form.Select aria-label="Default select example" style={{ minWidth: '110px' }}>
                                <option>Italiano</option>
                                <option value="1"><Globe />English</option>
                            </Form.Select>
                            <Button id="btn-access" className="ms-2 mx-md-4 px-3" variant="success" onClick={handleShow}>Accedi</Button>
                        </Form>
                    </div>
                </Container>
            </Navbar>
            <Outlet />
           

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Form Login</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Nome</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Nome"
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Cognome</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Cognome"
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="name@example.com"
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="password"
                                autoFocus
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer style={{margin:"auto"}}>
                    <Button variant="secondary" onClick={handleClose}>
                        Registrati
                    </Button>
                    <Button variant="success" onClick={handleClose}>
                       
                        <Link style={{textDecoration:"none",color:"white"}} to="/mainPage"> Accedi</Link></Button>
                </Modal.Footer>
            </Modal>


        </>
    )
}

export default Navigatore