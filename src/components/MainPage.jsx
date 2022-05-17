import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import MoviesRow from "./MoviesRow";
import CercaFilm from "./CercaFilm";



const MainPage = () => {

    const discoverMovieUrl = "http://localhost:2000/api/movie/search/";
    const idHorror = 27;

    let [horrorMovies, setHorrorMovies] = useState(null);

    useEffect(() => {
        fetchHorror();
    }, [])

    const fetchHorror = () => {
        axios.get(discoverMovieUrl + idHorror)
            .then((response) => {
                setHorrorMovies(response.data)
                console.log(response.data);
                console.log(horrorMovies);
            })
    };


    return (
        <div className="text-center">
            <CercaFilm />
            <MoviesRow category="Horror" movies={horrorMovies} />
        </div>
    )
}

export default MainPage;