import React from "react";
import Slider from "react-slick";
import { Spinner } from "react-bootstrap";
import { Container } from "react-bootstrap";
import '../style/MoviesTvRows.scss'
// react-slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardFilm from "./CardFilm";


const MoviesTvRow = (props) => {
    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1350,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    infinite: true,
                }
            },
            {
                breakpoint: 1145,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 840,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 622,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (

        <Container fluid style={{ padding: '30px' }}  >
            <div className="fs-2 fw-bold mb-3 ms-2">{props.category}</div>
            {
                props.moviesOrTv ?
                    <Slider {...settings}>
                        {
                            props.moviesOrTv[0].title ?
                                // movies
                                props.moviesOrTv.map(movie => {
                                    return (
                                        <CardFilm
                                            key={movie.id}
                                            id={movie.id}
                                            title={movie.title}
                                            img={movie.poster_path ? "https://image.tmdb.org/t/p/original" + movie.poster_path : require("../images/test-foto.jpg")}
                                            year={movie.release_date ? movie.release_date.substring(0, 4) : ""}
                                            type={props.category}
                                            overview={movie.overview}
                                            addFavourite={props.addFavourite}
                                            isFavourite={props.isFavourite}
                                            removeFavourite={props.removeFavourite}
                                            trailer={props.trailer}
                                            fetchTrailer={props.fetchTrailer}
                                        />
                                    )
                                }) :
                                // tv shows
                                props.moviesOrTv.map(tv => {
                                    return (
                                        <CardFilm
                                            key={tv.id}
                                            id={tv.id}
                                            title={tv.name}
                                            img={tv.poster_path ? "https://image.tmdb.org/t/p/original" + tv.poster_path : require("../images/test-foto.jpg")}
                                            year={tv.release_date ? tv.release_date.substring(0, 4) : ""}
                                            overview={tv.overview}
                                            type={props.category}
                                            addFavourite={props.addFavourite}
                                            isFavourite={props.isFavourite}
                                            removeFavourite={props.removeFavourite}
                                            trailer={props.trailer}
                                            fetchTrailer={props.fetchTrailer}
                                        />
                                    )
                                })
                        }

                    </Slider>
                    : <div className="my-5 text-center">
                        <Spinner animation="grow" variant="success" />
                    </div>

            }
        </Container>
    );
}

export default MoviesTvRow;