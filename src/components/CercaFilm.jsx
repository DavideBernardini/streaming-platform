import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col, Form } from "react-bootstrap";
import CardFilm from "./CardFilm";
// http://localhost:2000/api/title/search/:type/:query

const CercaFilm = () => {
    //const movie = "movie"
    //const tv = "tv"
    //setto di default movie
    const [type, setType] = useState("movie");
    const urlSearch = "http://localhost:2000/api/title/search/" +  type + "/";
    const [myData, setMyData] = useState(
        {
            data: []
        });
  
    const [search, setSearch] = useState("");
     
    
    /*
    useEffect(() => {
        axios.get(urlSearch + search)
            .then((response) => {
                console.log(response.data);
                setMyData(
                    {
                        data: response.data
                    }
                );
            })
    }, [search, type])
*/

    useEffect(() => {
        async function fetchData() {
            const response = await axios.get(urlSearch + search);
            setMyData(
                {
                    data: response.data
                }
            );
        }
        fetchData();
    }, [search, type]);


    
    const handleChange = (event) => {
        setSearch(event.target.value);
    }

    const handleChangeType = (event) => {
        setType(event.target.value);
    }

    return (
        <div className="text-center">
            <Form.Select onChange={handleChangeType}>
                <option value="movie">Film</option>
                <option value="tv">Serie Tv</option>
            </Form.Select>

            <input type="text" onChange={handleChange} />
   
        
            <Container fluid  style={{padding:'30px'}}>
                <Row xs={5}>
                        {           
                            
                            //ricerca film
                            myData.data.map((item, index) => (
                                
                                item.title?

                                <Col key={index}>
                                    {item.title}
                                    {
                                        item.poster_path ?
                                        <CardFilm style={{ width:'100%',height:'100%'}} key={index} name={item.title} img={"https://image.tmdb.org/t/p/original" + item.poster_path} />
                                        :
                                        <CardFilm style={{ width:'100%',height:'100%'}} key={index} name={item.title} img={require("../images/test-foto.jpg")} />
                                    }  
                                </Col>
                                :
                                <Col key={index}>
                                    {item.name}
                                    {
                                        item.poster_path ?
                                        <CardFilm style={{ width:'100%',height:'100%'}} key={index} name={item.name} img={"https://image.tmdb.org/t/p/original" + item.poster_path} />
                                        :
                                        <CardFilm style={{ width:'100%',height:'100%'}} key={index} name={item.name} img={require("../images/test-foto.jpg")} />
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


//test con async ed await
        /*
        useEffect(() => {
            async function fetchData() {
                const request = await axios.get(fetchUrl);
                setMovies(request.data.results);
                return request;
            }
            fetchData();
    }, [fetchUrl]);     
        */

        //MIO VA:
        /*
    useEffect(() => {
        axios.get(urlSearch + search)
            .then((response) => {
                console.log(response.data);
                setMyData(
                    {
                        film: response.data
                    }
                );
            })
    }, [search])
        */

    /* TEST MIO:
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(urlSearch + search);
            setMyData(request.data);
            return request;
        }
     */