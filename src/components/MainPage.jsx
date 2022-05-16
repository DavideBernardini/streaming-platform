import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import MoviesRow from "./MoviesRow";

const discoverMovieUrl = "localhost:2000/api/movie/search/";

const idHorror = 27;


const MainPage = () => {
    let [horrorMovies, setHorrorMovies] = useState(null);

    useEffect(() => {
        fetchHorror()
    }, [])
    
    const fetchHorror = () => {
        axios.get(discoverMovieUrl + idHorror)
        .then((response) => {
            setHorrorMovies(response.data)
            console.log(response.data);
            console.log(horrorMovies);
        })
    }

    return(
        <>
        <MoviesRow category="Horror"/>

        </>
    )
}

export default MainPage;