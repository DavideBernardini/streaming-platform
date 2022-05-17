import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col, Form } from "react-bootstrap";
import CardFilm from "./CardFilm";
// http://localhost:2000/api/title/search/:type/:query

const CercaFilm = () => {
    //const movie = "movie"
    //const tv = "tv"
    const [type, setType] = useState("movie");
    const urlSearch = "http://localhost:2000/api/title/search/" +  type + "/";
  
    

    const [myData, setMyData] = useState(
        {
            data: []
        });
  
    const [search, setSearch] = useState("");
        
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
   
        
            <Container>
                <Row xs={5}>
                        {
                            //ricerca film
                            myData.data[0].title ?
                            myData.data.map((item, index) => (
                                <Col key={index}>
                                    {item.title}
                                    {
                                        item.poster_path ?
                                        <CardFilm key={index} name={item.title} img={"https://image.tmdb.org/t/p/original" + item.poster_path} />
                                        :
                                        <CardFilm key={index} name={item.title} img={require("../images/test-foto.jpg")} />
                                    }
                                    
                                    
                                </Col>
                            )) :
                            //ricerca serie tv
                            myData.data.map((item, index) => (
                                <Col key={index}>
                                    {item.name}
                                    {
                                        item.poster_path ?
                                        <CardFilm key={index} name={item.name} img={"https://image.tmdb.org/t/p/original" + item.poster_path} />
                                        :
                                        <CardFilm key={index} name={item.name} img={require("../images/test-foto.jpg")} />
                                    }
                                    
                                    
                                </Col>
                            )) 

                        }
                </Row>        
            </Container>
        </div>
    )
}
   
export default CercaFilm;
/*
{
                            props.moviesOrTv[0].title ?
                                // movies
                                props.moviesOrTv.map(movie => {
                                    return (
                                        <h3 className="text-white" key={movie.id}>
                                            {movie.title}
                                        </h3>
                                    )
                                }) :
                                // tv shows
                                props.moviesOrTv.map(tv => {
                                    return (
                                        <h3 className="text-white" key={tv.id}>
                                            {tv.name}
                                        </h3>
                                    )
                                })
                        }
*/


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