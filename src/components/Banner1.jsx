import React from 'react';
import '../style/BannerLeftText.scss'
import { Row, Col, Container } from 'react-bootstrap';
import '../images/tv.png'

const Banner1 = () => {

    return (
        <Container>
            <Row md={2} className="banner-lt d-flex align-items-md-center">
                <Col className="banner-lt_text">
                    <div>
                        <h2>
                            Goditi Netflix sulla tua TV.
                        </h2>
                        <p>
                            Guarda Netflix su smart TV, Playstation, Xbox, Chromecast, Apple TV, lettori Blu-ray e molti altri dispositivi.
                        </p>
                    </div>

                </Col>
                <Col className="banner-lt_image">
                    <img src={require("../images/tv.png")} alt="tv" />

                    <video id="tv_clip" autoplay="" muted="" loop="" playsInline="">
                        <source src="../videos/video-tv-0819.m4v" type="video/mp4" />
                    </video>
                </Col>
            </Row>
        </Container>
    );
}

export default Banner1;