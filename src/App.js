
import "./style/navigatore.css"
import "./App.css";

import Navigatore from "./components/navigatore"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import MainPage from "./components/MainPage"
import Footer from "./components/Footer";





function App() {
    return (
        <div className="App" >
           
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Navigatore />}>
                        <Route index element={<LandingPage />} />
                        <Route path="mainPage" element={<MainPage />} />
                    </Route>
                </Routes>
            </BrowserRouter>
            <Footer/>

        </div>
    );
}

export default App;
