import React from "react";
import TestoCentrale from "./testoCentrale";
import Banner1 from "./Banner1";
import Banner2 from "./Banner2";
import Banner3 from "./Banner3";
import Banner4 from "./Banner4";
import Footer from "./Footer";
import '../style/navigatore.scss'

const LandingPage = () => {
    return (
        <div className="landing-page">
            <div className="hero d-flex align-items-center justify-content-center">
                <div className="text-center">
                    <TestoCentrale />
                </div>
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
            <Footer/>
        </div>
    )
}

export default LandingPage