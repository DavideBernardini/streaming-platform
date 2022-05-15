
import { Container } from "react-bootstrap";
import "./style/navigatore.css"
import "./App.css";
import Navigatore from "./components/navigatore"
import TestoCentrale from "./components/testoCentrale";
import Banner1 from './components/Banner1'
import Banner2 from "./components/Banner2";
import Banner3 from "./components/Banner3";
import Banner4 from "./components/Banner4";
import Question from "./components/Question";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";




function App() {
    return (
        <div className="App" >
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Navigatore />}>
                    <Route index element={<LandingPage />} />
                    </Route>
                </Routes>
            </BrowserRouter>


        </div>
    );
}

export default App;
