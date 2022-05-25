import React, { useState } from "react";
import { Card, Button, Modal, Form } from 'react-bootstrap'
import '../style/CardFilm.scss'
import { MDBIcon } from 'mdb-react-ui-kit';
import {FacebookShareButton ,WhatsappShareButton, LinkedinShareButton, RedditShareButton, FacebookMessengerShareButton, TelegramShareButton} from 'react-share';
import {LinkedinIcon, FacebookIcon, WhatsappIcon, RedditIcon, FacebookMessengerIcon, TelegramIcon} from 'react-share';
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
                            props.overview?
                            <>
                                <h3 className='fw-bold'>Descrizione</h3>
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

                    <FacebookMessengerShareButton
                        url={props.trailer}
                        quote={props.title}
                        className="mx-2 pb-2"
                    >
                        <FacebookMessengerIcon size={40} round />
                    </FacebookMessengerShareButton>

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
