import React from "react";
import Slider from "react-slick";
import { Spinner } from "react-bootstrap";
// react-slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MoviesRow = (props) => {
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

        <div>
            <h2>{props.category}</h2>
            {
                props.movies ?
                    <Slider {...settings}>
                        {
                            props.movies.map(movie => {
                                return (
                                    <h3 className="text-white" key={movie.id}>
                                        {movie.title}
                                    </h3>
                                )
                            })
                        }

                    </Slider>
                : <Spinner className="text-center" animation="grow" variant="success" />
            }
        </div>
    );
}

export default MoviesRow;