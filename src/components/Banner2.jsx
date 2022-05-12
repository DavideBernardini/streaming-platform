import React from 'react';
import '../style/BannerRightText.scss'
import { Row, Col, Container } from 'react-bootstrap';
import '../images/tv.png'

const Banner2 = () => {

    return (
        <Container>
            <Row md={2} className="banner-rt d-flex align-items-md-center">

                <Col className="banner-rt_image">
                    <img src={require("../images/mobile-0819.jpg")} alt="mobile" />

                    <div className="download-card">
                        <img src={require('../images/boxshot.png')} alt="stranger things thunb" />

                        <div className='ms-4 me-5'>Download in corso...</div>

                        <img className="gif-download" src={require("../images/download-icon.gif")} alt="download gif" />
                    </div>
                </Col>

                <Col className="banner-rt_text">
                    <div>
                        <h2>
                            Scarica le tue serie da guardare offline.
                        </h2>
                        <p>
                            Salva facilmente i tuoi preferiti così avrai sempre qualcosa da guardare.
                        </p>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Banner2;