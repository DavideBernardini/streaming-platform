
import { Container, ContainerFluid } from "react-bootstrap";
import "./App.css";
import Navigatore from"./components/navigatore"
import TestoCentrale from "./components/testoCentrale";

function App() {
  return (
    <div className="App landingPage " >
   
         <Navigatore/>
         <Container className="text-center " style={{marginTop:"150px"}}>
           <TestoCentrale/>
         </Container>
         
   
     
    </div>
  );
}

export default App;
