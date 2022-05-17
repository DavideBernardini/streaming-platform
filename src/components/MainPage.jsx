import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import MoviesTvRow from "./MoviesTvRow";




const MainPage = () => {

    // base urls
    const discoverMovieUrl = "http://localhost:2000/api/movie/search/";
    const discoverTvUrl = "http://localhost:2000/api/tv/search/";

    // ids
    const idHorrorMovies = 27;
    const idComedyMovies = 35;
    const idAnimationMovies = 16;
    const idActionMovies = 28;
    const idFantasyTv = 10765;
    const idComedyTv = 35;
    const idDramaTv = 18;
    const idRealityTv = 10764;

    // movies
    let [horrorMovies, setHorrorMovies] = useState(null);
    let [comedyMovies, setComedyMovies] = useState(null);
    let [animationMovies, setAnimationMovies] = useState(null);
    let [actionMovies, setActionMovies] = useState(null);
    // tv shows
    let [fantasyTv, setFantasyTv] = useState(null);
    let [comedyTv, setComedyTv] = useState(null);
    let [dramaTv, setDramaTv] = useState(null);
    let [realityTv, setRealityTv] = useState(null);

    useEffect(() => {

        fetchHorrorMovies();
        fetchComedyMovies();
        fetchActionMovies();
        fetchAnimationMovies();

        fetchFantasyTv();
        fetchComedyTv();
        fetchDramaTv();
        fetchRealityTv();

    }, [])

    // fetch movies
    const fetchHorrorMovies = () => {
        axios.get(discoverMovieUrl + idHorrorMovies)
            .then((response) => {
                setHorrorMovies(response.data)
            })
    };
    const fetchComedyMovies = () => {
        axios.get(discoverMovieUrl + idComedyMovies)
            .then((response) => {
                setComedyMovies(response.data)
            })
    };
    const fetchActionMovies = () => {
        axios.get(discoverMovieUrl + idActionMovies)
            .then((response) => {
                setActionMovies(response.data)
            })
    };
    const fetchAnimationMovies = () => {
        axios.get(discoverMovieUrl + idAnimationMovies)
            .then((response) => {
                setAnimationMovies(response.data)
            })
    };

    // fetch tv shows
    const fetchFantasyTv = () => {
        axios.get(discoverTvUrl + idFantasyTv)
            .then((response) => {
                setFantasyTv(response.data)
            })
    };
    const fetchComedyTv = () => {
        axios.get(discoverTvUrl + idComedyTv)
            .then((response) => {
                setComedyTv(response.data)
            })
    };
    const fetchDramaTv = () => {
        axios.get(discoverTvUrl + idDramaTv)
            .then((response) => {
                setDramaTv(response.data)
            })
    };
    const fetchRealityTv = () => {
        axios.get(discoverTvUrl + idRealityTv)
            .then((response) => {
                setRealityTv(response.data)
            })
    };

    return (
        <div>
            {/* movie rows */}
            <MoviesTvRow category="Azione:" movies={actionMovies} />
            <MoviesTvRow category="Commedie:" movies={comedyMovies} />
            <MoviesTvRow category="Horror:" movies={horrorMovies} />
            <MoviesTvRow category="Animazione:" movies={animationMovies} />
            {/* movie rows */}
            <MoviesTvRow category="Fantascienza e Fantasy:" movies={fantasyTv} />
            <MoviesTvRow category="Commedie:" movies={comedyTv} />
            <MoviesTvRow category="Drama:" movies={dramaTv} />
            <MoviesTvRow category="Reality:" movies={realityTv} />
        </div>
    )
}

export default MainPage;