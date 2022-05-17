import React from "react";
import Slider from "react-slick";
import { Spinner } from "react-bootstrap";
import { Container } from "react-bootstrap";
import '../style/MoviesTvRows.scss'
// react-slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const MoviesTvRow = (props) => {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (

        <Container >
            <div className="fs-2">{props.category}</div>
            {
                props.moviesOrTv ?
                    <Slider {...settings}>
                        {
                            props.moviesOrTv[0].title ?
                                // movies
                                props.moviesOrTv.map(movie => {
                                    return (
                                        <div className="movie-tv-card" key={movie.id}>
                                            {movie.title}
                                        </div>
                                    )
                                }) :
                                // tv shows
                                props.moviesOrTv.map(tv => {
                                    return (
                                        <div className="movie-tv-card" key={tv.id}>
                                            {tv.name}
                                        </div>
                                    )
                                })
                        }

                    </Slider>
                    : <div className="my-5 text-center">
                        <Spinner animation="grow" variant="success"/>
                    </div>
                    
            }
        </Container>
    );
}

export default MoviesTvRow;