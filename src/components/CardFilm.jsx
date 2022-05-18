import React, { useState, useEffect } from "react";
import { Card, Button, Modal, Form } from 'react-bootstrap'
import '../style/CardFilm.scss'
// http://localhost:2000/api/title/search/:type/:query
// localhost:2000/api/title/search/movie/spiderman
const CardFilm = (props) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
   
    return (
        <>
                <Card style={{ width: '20rem', height: '30rem' }} className="hoverCard" id={props.id}>
                    <Card.Img onClick={handleShow} style={{ width: '100%', height: '100%' }} variant="top" src={props.img} alt="immagine" />
                    {
                        props.isFavourite ?
                            <Button className="btn-favourite" onClick={props.removeFavourite}>remove Favourite</Button>
                            :
                            <Button className="btn-favourite" onClick={props.addFavourite}>add Favourite</Button>
                    }
                   
                </Card>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>{props.title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                        <video width={'100%'}controls src={props.video}></video>
                        </Form>
                    </Modal.Body>
                </Modal>
        </>
    )
}


CardFilm.defaultProps = { isFavourite: false }

export default CardFilm
