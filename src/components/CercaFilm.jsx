import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col, Form } from "react-bootstrap";
import CardFilm from "./CardFilm";

const CercaFilm = () => {
    const [typeSearch, setTypeSearch] = useState("movie");
    const urlForSearch = "http://localhost:2000/api/title/search/" + typeSearch + "/";
    const [searchResults, setSearchResults] = useState([]);
    const [search, setSearchQuery] = useState("");
    

    useEffect(() => {
        const fetchSearch = async () => {
            const response = await axios.get(urlForSearch + search);
            setSearchResults(response.data);
        }
        fetchSearch();
    }, [search, typeSearch]);



    const handleChange = (event) => {
        setSearchQuery(event.target.value);
    }

    const handleChangeType = (event) => {
        setTypeSearch(event.target.value);
    }

    return (
        <div className="text-center">
            <Form.Select className="mb-3" style={{ width: '200px', textAlign: 'center', margin: 'auto', padding: '5px' }} onChange={handleChangeType}>
                <option value="movie">Film</option>
                <option value="tv">Serie Tv</option>
            </Form.Select>

            <input type="text" style={{ width: '200px', textAlign: 'center', margin: 'auto', padding: '5px' }} placeholder="Search" onChange={handleChange} />


            <Container fluid style={{ padding: '30px' }}>
                <Row xs={5}>
                    {

                        //ricerca film
                        searchResults.map((item, index) => (

                            item.title ?

                                <Col key={index}>
                                    {item.title}
                                    {
                                        item.poster_path ?
                                            <CardFilm style={{ width: '100%', height: '100%' }} key={index} name={item.title} img={"https://image.tmdb.org/t/p/original" + item.poster_path} />
                                            :
                                            <CardFilm style={{ width: '100%', height: '100%' }} key={index} name={item.title} img={require("../images/test-foto.jpg")} />
                                    }
                                </Col>
                                :
                                <Col key={index}>
                                    {item.name}
                                    {
                                        item.poster_path ?
                                            <CardFilm style={{ width: '100%', height: '100%' }} key={index} name={item.name} img={"https://image.tmdb.org/t/p/original" + item.poster_path} />
                                            :
                                            <CardFilm style={{ width: '100%', height: '100%' }} key={index} name={item.name} img={require("../images/test-foto.jpg")} />
                                    }
                                </Col>

                        ))
                    }
                </Row>
            </Container>
        </div>
    );
}

export default CercaFilm;
