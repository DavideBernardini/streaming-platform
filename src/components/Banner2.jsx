import React from 'react';
import '../style/BannerRightText.scss'
import { Row, Col, Container } from 'react-bootstrap';
import '../images/tv.png'

const Banner2 = () => {

    return (
        <Container>
            <Row  xs={1} md={1} lg={2} className="banner-rt d-flex align-items-md-center">

                <Col xs={{order: 2}} lg={{order: 1}} className="banner-rt_image">
                    <img className='mobile' src="https://mr.comingsoon.it/imgdb/locandine/big/61235.jpg"alt="mobile" />

                    <div className="download-card">
                        <img   src="https://www.exibart.com/repository/media/2019/08/milanese-imbruttito1.jpg" alt="stranger things thunb" />

                        <div className='ms-4 me-5'>Download in corso...</div>

                        <img className="gif-download" src={require("../images/download-icon.gif")} alt="download gif" />
                    </div>
                </Col>

                <Col xs={{order: 1}} s={{order: 1}} lg={{order: 2}} className="banner-rt_text">
                    <div>
                        <h2 className='testiTitolo'>
                            Scarica i tuoi film da guardare offline.
                        </h2>
                        <p className='testiTitolo'>
                            Salva facilmente i tuoi preferiti così avrai sempre qualcosa da guardare.
                        </p>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Banner2;