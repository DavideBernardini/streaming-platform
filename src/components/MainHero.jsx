import React from "react";
import '../style/MainHero.scss';
import { Button, Modal, Form } from 'react-bootstrap';
import { useState } from "react";
import { FacebookShareButton, WhatsappShareButton, LinkedinShareButton, RedditShareButton, TelegramShareButton } from 'react-share';
import { LinkedinIcon, FacebookIcon, WhatsappIcon, RedditIcon, TelegramIcon } from 'react-share';

const MainHero = (props) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        props.movie &&
        <>
            <div className="main-hero">
                <video id="morbius_clip" autoPlay={true} muted="" loop="100" playsInline="">
                    <source src={require("../videos/MORBIUS - Retro Trailer Now on Digital(1)_muted.mp4")} type="video/mp4" />
                </video>
                <div className="main-hero_content">
                    <h2 className="main-hero_title">Morbius</h2>
                    <p className="main-hero_description">
                        Infetto da una rara e pericolosa malattia del sangue, determinato a salvare chiunque sia destinato a subire la sua stessa sorte, il Dr. Morbius tenta una scommessa disperata. Quello che inizialmente sembra essere un successo si rivela presto un rimedio potenzialmente più pericoloso della malattia stessa.
                    </p>
                    <Button variant="success" className="fs-4 px-4 mt-2" onClick={handleShow}>Play</Button>

                </div>
            </div>
            <Modal
                size='lg'
                show={show}
                onHide={handleClose}
                className="modal" >
                <Modal.Header closeButton className="bg-dark border-dark text-center p-0 ps-4 pt-2 pe-4">
                    <Modal.Title className="bg-dark border-dark fs-1 fw-bold">Morbius</Modal.Title>
                </Modal.Header>
                <Modal.Body className="bg-dark">
                    <Form>
                        <iframe width="100%" height="400" src="https://www.youtube.com/embed/wG2TjtueeSU" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </Form>
                    <Form>
                        <h3 className='fw-bold fs-3 fw-bold'>Descrizione</h3>
                        <p className="pt-2">
                            Infetto da una rara e pericolosa malattia del sangue, determinato a salvare chiunque sia destinato a subire la sua stessa sorte, il Dr. Morbius tenta una scommessa disperata. Quello che inizialmente sembra essere un successo si rivela presto un rimedio potenzialmente più pericoloso della malattia stessa.
                        </p>
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
    );
};

export default MainHero;