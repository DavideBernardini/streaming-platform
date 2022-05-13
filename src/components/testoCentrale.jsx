import React from "react";
import { Container, FormControl, Button, InputGroup } from "react-bootstrap";
import '../style/TestoCentrale.scss'

const TestoCentrale = () => {
    return (
        <>
            <Container className="text-white  ">
                <h1 className="testiTitolo z-index-max">Film, serie TV e tanto altro. <br></br> Senza Limiti</h1>
                <p className="sottoTitolo z-index-max">Guarda ciò che vuoi ovunque. Disdici quando vuoi.</p>
                <p className="sottoTitolo2 z-index-max">Vuoi guardare GreenStream? Inserisci l'indirizzo email per abbonarti o riattivare il tuo abbonamento.</p>

            </Container>
            <div id="email-form">
                <InputGroup className="mb-3 p-3 d-flex flex-nowrap z-index-max">
                    <FormControl className="p-3"
                        placeholder="Indirizzo email"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                    />
                    <Button variant="success" id="button-addon2">
                        Inizia <span className="ms-1">&gt;</span>
                    </Button>
                </InputGroup>

            </div>

        </>



    )
}

export default TestoCentrale