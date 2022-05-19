import React, { useState, useEffect } from "react";
import { Card, Button, Modal, Form } from 'react-bootstrap'
import '../style/CardFilm.scss'
import { Heart } from 'react-bootstrap-icons';

// http://localhost:2000/api/title/search/:type/:query
// localhost:2000/api/title/search/movie/spiderman
const CardFilm = (props) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

   
    return (
        <>
                <Card style={{ width: '20rem', height: '30rem' }} id={props.id}>
                    <Card.Img onClick={handleShow}  style={{ width: '100%', height: '100%' }}className="hoverCard"  variant="top" src={props.img} alt="immagine" />
                  
                            {
                        props.isFavourite ?
                      
                            <Button  className="btn-favourite" onClick={props.removeFavourite}>remove Favourite</Button>
                            :
                            <Button className="btn-favourite" onClick={props.addFavourite}>add Favourite</Button>
                    } 
                   
                </Card>
                <Modal size='lg' show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>{props.title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                        <iframe width="100%" height="500" src="https://www.youtube.com/embed/1Sv8G7Bu2vQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </Form>
                    </Modal.Body>
                </Modal>
        </>
    )
}


CardFilm.defaultProps = { isFavourite: false }

export default CardFilm
