import React from 'react';
import '../style/BannerRightText.scss'
import { Row, Col, Container } from 'react-bootstrap';
import '../images/tv.png'

const Banner4 = () => {

    return (
        <Container>
            <Row md={2} className="banner-rt kids d-flex align-items-md-center">

                <Col xs={{order: 2}} lg={{order: 1}} className="banner-rt_image">
                    <img src={require("../images/kidsValueProp.png")} alt="kids" />
                </Col>

                <Col xs={{order: 1}} lg={{order: 2}} className="banner-rt_text">
                    <div>
                        <h2 className='testiTitolo'>
                            Crea profili per i bambini.
                        </h2>
                        <p className='testiTitolo'>
                            I bambini scoprono nuove avventure in compagnia dei loro personaggi preferiti in uno spazio tutto loro già incluso nel tuo abbonamento.
                        </p>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Banner4;