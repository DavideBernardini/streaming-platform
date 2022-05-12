import React from "react";
import { Container, Form, FormControl, Button, InputGroup } from "react-bootstrap";

const TestoCentrale = () => {
    return (
        <>
            <Container className="text-white  ">
                <h1 className="testiTitolo">Film, serie TV e tanto altro. <br></br> Senza Limiti</h1>
                <p className="sottoTitolo">Guarda ciò che vuoi ovunque. Disdici quando vuoi.</p>
                <p className="sottoTitolo2">Vuoi guardare Netflix? Inserisci l'indirizzo email per abbonarti o riattivare il tuo abbonamento.</p>

            </Container>
            <div  style={{width:"500px", margin:"auto"}}>
                <InputGroup className="mb-3 p-3">
                    <FormControl className="p-3"
                        placeholder="Indirizzo email"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                    />
                    <Button variant="danger" id="button-addon2">
                        Inizia &gt;
                    </Button>
                </InputGroup>

            </div>

        </>



    )
}

export default TestoCentrale