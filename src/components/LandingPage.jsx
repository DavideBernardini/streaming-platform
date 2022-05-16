import React from "react";
import Navigatore from "./navigatore";
import TestoCentrale from "./testoCentrale";
import Banner1 from "./Banner1";
import Banner2 from "./Banner2";
import Banner3 from "./Banner3";
import Banner4 from "./Banner4";

import { Container } from "react-bootstrap";

const LandingPage = () => {
    return (
        <>

            <div className="landingPage">
                <Container className="text-center " style={{ marginTop: "150px" }}>
                    <TestoCentrale />
                </Container>
            </div>
            <div className="separator"></div>
            <Banner1 />
            <div className="separator"></div>
            <Banner2 />
            <div className="separator"></div>
            <Banner3 />
            <div className="separator"></div>
            <Banner4 />
            <div className="separator"></div>
        </>
    )
}

export default LandingPage