import React, { useState, useEffect } from "react";
import {Card, Button} from 'react-bootstrap'
// http://localhost:2000/api/title/search/:type/:query
// localhost:2000/api/title/search/movie/spiderman
const CardFilm = (props) => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Title>{props.name}</Card.Title>
            <Card.Img variant="top" src={props.img} alt="immagine" />
        </Card>
    )
}

export default CardFilm
    