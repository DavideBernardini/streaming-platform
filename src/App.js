import "./App.css";
import Navigatore from "./components/Navigatore"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import MainPage from "./components/MainPage"
import SelectUtente from "./components/selectUtente";

function App() {
    return (
        <div className="App" >
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Navigatore />}>
                        <Route index element={<LandingPage />} />
                        <Route path="mainPage" element={<MainPage />} />
                        <Route path="selectUtente" element={<SelectUtente/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
