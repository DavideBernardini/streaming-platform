import React from "react";
import Slider from "react-slick";
import { Spinner } from "react-bootstrap";
// react-slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container } from "react-bootstrap";

const MoviesTvRow = (props) => {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
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

                    </Slider>
                    : <Spinner animation="grow" variant="success" className="my-5"/>
            }
        </Container>
    );
}

export default MoviesTvRow;