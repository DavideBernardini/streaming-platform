import { Container, Row, Col, Form } from "react-bootstrap";
import CardFilm from "./CardFilm";

const CercaFilm = (props) => {
    return (
        <div className="text-center">
            <Form.Select className="mb-3" style={{ width: '200px', textAlign: 'center', margin: 'auto', padding: '5px' }} onChange={props.getTypeSelect}>
                <option value="movie">Film</option>
                <option value="tv">Serie Tv</option>
            </Form.Select>

            <input type="text" style={{ width: '200px', textAlign: 'center', margin: 'auto', padding: '5px' }} placeholder="Search" onChange={props.getQuerySearch} />


            <Container fluid style={{ padding: '30px' }}>
                <Row xs={5}>
                    {
                        //ricerca film
                        props.searchResults.map((item, index) => (

                            item.title ?

                                <Col key={index}>
                                    {item.title}
                                    {
                                        item.poster_path ?
                                            <CardFilm style={{ width: '100%', height: '100%' }} 
                                            key={index} name={item.title} 
                                            img={"https://image.tmdb.org/t/p/original" + item.poster_path} 
                                            fetchTrailer={props.fetchTrailer} 
                                            trailer={props.trailer} 
                                            overview={props.overview} 
                                            addFavourite={props.addFavourite} 
                                            />
                                            :
                                            <CardFilm style={{ width: '100%', height: '100%' }} 
                                            key={index} 
                                            name={item.title} 
                                            img={require("../images/test-foto.jpg")} 
                                            fetchTrailer={props.fetchTrailer} 
                                            trailer={props.trailer} 
                                            overview={props.overview} 
                                            addFavourite={props.addFavourite} />
                                    }
                                </Col>
                                :
                                <Col key={index}>
                                    {item.name}
                                    {
                                        item.poster_path ?
                                            <CardFilm style={{ width: '100%', height: '100%' }} 
                                            key={index} 
                                            name={item.name} 
                                            img={"https://image.tmdb.org/t/p/original" + item.poster_path} 
                                            fetchTrailer={props.fetchTrailer} 
                                            trailer={props.trailer} 
                                            overview={props.overview} 
                                            addFavourite={props.addFavourite} 
                                            />
                                            :
                                            <CardFilm style={{ width: '100%', height: '100%' }} 
                                            key={index} 
                                            name={item.name} 
                                            img={require("../images/test-foto.jpg")} 
                                            fetchTrailer={props.fetchTrailer} 
                                            trailer={props.trailer} 
                                            overview={props.overview} 
                                            addFavourite={props.addFavourite} 
                                            />
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
