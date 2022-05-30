import React, { useState } from "react";
import { Card, Button, Modal, Form } from 'react-bootstrap'
import '../style/CardFilm.scss'
import { MDBIcon } from 'mdb-react-ui-kit';
import {FacebookShareButton ,WhatsappShareButton, LinkedinShareButton, RedditShareButton,  TelegramShareButton} from 'react-share';
import {LinkedinIcon, FacebookIcon, WhatsappIcon, RedditIcon, TelegramIcon} from 'react-share';
//
// http://localhost:2000/api/title/search/:type/:query
// localhost:2000/api/title/search/movie/spiderman
const CardFilm = (props) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Card style={{ width: '20rem', height: '30rem' }} id={props.id} onClick={props.fetchTrailer} className="bg-black overflow-hidden position-relative pointer">
                <Card.Img onClick={handleShow} style={{ width: '100%', height: '413px' }} className="hoverCard border-radious-bottom" variant="top" src={props.img} alt="immagine" />


                {!show &&
                    props.isFavourite ?

                    <Button className="btn btn-danger button-card fw-bold remove-favourite text-danger" onClick={props.removeFavourite} style={{ height: '37px', zIndex: 10, backgroundColor: '#000', border: 'none', }}>
                        Rimuovi dai Preferiti <MDBIcon fas icon="ban" className="text-danger"/>
                    </Button>
                    :
                    <Button className="button-card fw-bold add-favourite" variant="dark" onClick={props.addFavourite} style={{ height: '37px', color: '#fff', backgroundColor: '#000', border: 'none', }}>
                        Aggiungi ai Preferiti <MDBIcon fas icon='heart' className="text-success" />
                    </Button>
                }



            </Card>
            <Modal size='lg' show={show} onHide={handleClose} className="modal">
                <Modal.Header closeButton className="bg-dark border-dark text-center">
                    <Modal.Title className="bg-dark border-dark fs-2">{props.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body className="bg-dark"> 
                    <Form>
                        <iframe width="100%" height="500" src={props.trailer} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </Form>
                    <Form>
                        {
                            props.overview?
                            <>
                                <div className='fw-bold fs-3 fw-bold'>Descrizione</div>
                                <p>{props.overview}</p>
                            </>
                            :
                            <>
                                <h3 className='fw-bold'>Descrizione</h3>
                                <p>Mi spiace, ma la descrizione non è disponibile 😥</p>
                            </>
                        }

                    </Form>
                    <br></br>
                    <WhatsappShareButton   
                        url={props.trailer}
                        quote={props.title}
                        className="mx-2 pb-2"
                    >
                        <WhatsappIcon size={40} round />
        
                    </WhatsappShareButton>

                    <TelegramShareButton   
                        url={props.trailer}
                        quote={props.title}
                        className="mx-2 pb-2"
                    >
                        <TelegramIcon size={40} round />
                    </TelegramShareButton>

                    <FacebookShareButton 
                        url={props.trailer}
                        quote={props.title}
                        className="mx-2 pb-2"
                    >
                        <FacebookIcon size={40} round />
                    </FacebookShareButton>

                    <LinkedinShareButton   
                        url={props.trailer}
                        quote={props.title}
                        className="mx-2 pb-2"
                    >
                        <LinkedinIcon size={40} round />
                    </LinkedinShareButton>

                    <RedditShareButton 
                        url={props.trailer}
                        quote={props.title}
                        className="mx-2 pb-2"
                    >
                        <RedditIcon size={40} round />
                    </RedditShareButton>

                </Modal.Body>
            </Modal>
        </>
    )
}

CardFilm.defaultProps = { isFavourite: false }

export default CardFilm
