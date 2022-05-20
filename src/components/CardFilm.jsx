import React, { useState } from "react";
import { Card, Button, Modal, Form } from 'react-bootstrap'
import '../style/CardFilm.scss'
import { MDBIcon } from 'mdb-react-ui-kit';
//
// http://localhost:2000/api/title/search/:type/:query
// localhost:2000/api/title/search/movie/spiderman
const CardFilm = (props) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Card style={{ width: '20rem', height: '30rem' }} id={props.id} onClick={props.fetchTrailer}>
                <Card.Img onClick={handleShow} style={{ width: '100%', height: '100%' }} className="hoverCard" variant="top" src={props.img} alt="immagine" />


                {!show &&
                    props.isFavourite ?

                    <Button className="btn btn-danger" onClick={props.removeFavourite}>
                        Rimuovi dai Preferiti <MDBIcon fas icon="ban" />
                    </Button>
                    :
                    <Button className="btn btn-light" onClick={props.addFavourite}>
                        Aggiungi ai Preferiti <MDBIcon fas icon='heart' className="text-danger" />
                    </Button>
                }



            </Card>
            <Modal size='lg' show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{props.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <iframe width="100%" height="500" src={props.trailer} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </Form>
                    <Form>
                        {
                            props.overview &&
                            <>
                                <h3 className='fw-bold'>Descrizione</h3>
                                <p>{props.overview}</p>
                            </>
                        }

                    </Form>
                    <br></br>
                    <Button className='m-1' style={{ backgroundColor: '#3b5998' }} href='#'>
                        <MDBIcon fab icon='facebook-f' />
                    </Button>
                    <Button className='m-1' style={{ backgroundColor: '#ac2bac' }} href='#'>
                        <MDBIcon fab icon='instagram' />
                    </Button>
                    <Button className='m-1' style={{ backgroundColor: '#25d366' }} href='#'>
                        <MDBIcon fab icon='whatsapp' />
                    </Button>

                </Modal.Body>
            </Modal>
        </>
    )
}

CardFilm.defaultProps = { isFavourite: false }

export default CardFilm
