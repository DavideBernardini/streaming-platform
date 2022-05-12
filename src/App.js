
import { Container } from "react-bootstrap";
import "./style/navigatore.css"
import "./App.css";
import Navigatore from "./components/navigatore"
import TestoCentrale from "./components/testoCentrale";
import Banner1 from './components/Banner1'
import Banner2 from "./components/Banner2";
import Banner3 from "./components/Banner3";
import Banner4 from "./components/Banner4";



function App() {
    return (
        <div className="App" >
            <div className="landingPage">
                
                <Navigatore className="landingPage" />
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


        </div>
    );
}

export default App;
