import React from 'react';
import '../style/BannerLeftText.scss'
import { Row, Col, Container } from 'react-bootstrap';
import '../images/tv.png'

const Banner3 = () => {

    return (
        <Container>
            <Row md={2} className="banner-lt devices d-flex align-items-md-center">
                <Col className="banner-lt_text">
                    <div>
                        <h2>
                            Guarda Netflix ovunque.
                        </h2>
                        <p>
                            Cellulare, tablet, laptop e TV: scegli tu cosa usare per guardare in streaming film e serie TV senza limiti e senza spendere di più.
                        </p>
                    </div>

                </Col>
                <Col className="banner-lt_image">
                    <img src={require("../images/device-pile.png")} alt="tv" />

                    <video id="tv_clip2" autoplay="" muted="" loop="" playsInline="">
                        <source src="../videos/video-devices.m4v" type="video/mp4" />
                    </video>
                </Col>
            </Row>
        </Container>
    );
}

export default Banner3;