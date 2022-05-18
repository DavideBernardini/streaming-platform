import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import MoviesTvRow from "./MoviesTvRow";
import CercaFilm from "./CercaFilm";
import '../style/MainPage.scss'




const MainPage = () => {

    // base urls
    const discoverMovieUrl = "http://localhost:2000/api/movie/search/";
    const discoverTvUrl = "http://localhost:2000/api/tv/search/";
    const trendsMoviesWeek = "http://localhost:2000/api/movie/trends/movie/week"
    const trendsTvWeek = "http://localhost:2000/api/movie/trends/tv/week"

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
    let[trendsMoviesOfWeek , setTrendsMoviesOfWeek] = useState(null)
    let [horrorMovies, setHorrorMovies] = useState(null);
    let [comedyMovies, setComedyMovies] = useState(null);
    let [animationMovies, setAnimationMovies] = useState(null);
    let [actionMovies, setActionMovies] = useState(null);
    // tv shows
    let[trendsTvOfWeek , setTrendsTvOfWeek] = useState(null)
    let [fantasyTv, setFantasyTv] = useState(null);
    let [comedyTv, setComedyTv] = useState(null);
    let [dramaTv, setDramaTv] = useState(null);
    let [realityTv, setRealityTv] = useState(null);
    //add favourite
    const [favourite, setFavourite] = useState([]);
    let alert = false

    useEffect(() => {

        fetchTrendsMovies()
        fetchHorrorMovies();
        fetchComedyMovies();
        fetchActionMovies();
        fetchAnimationMovies();

        fetchTrendsTv()
        fetchFantasyTv();
        fetchComedyTv();
        fetchDramaTv();
        fetchRealityTv();
        
        setFavourite([])

    }, [alert])

    // fetch movies
    const fetchTrendsMovies = () => {
        axios.get(trendsMoviesWeek)
            .then((response) => {
                setTrendsMoviesOfWeek(response.data)
            })
    };

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
    const fetchTrendsTv = () => {
        axios.get(trendsTvWeek)
            .then((response) => {
                setTrendsTvOfWeek(response.data)
            })
    };
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

     // add favourite
     const addFavourite = (event) => {
        console.log("ID FILM: "  + event.target.parentElement.id)
        console.log("ADDA")

        let newFavourite = null
       
        for (let i = 0; i < trendsMoviesOfWeek.length; i++) { 
            if ( Number(trendsMoviesOfWeek[i].id) === Number(event.target.parentElement.id)) {
                    newFavourite = trendsMoviesOfWeek[i]
            }
        }
        // filtro per i doppioni
        if (!favourite.includes(newFavourite)) {
            setFavourite([...favourite, newFavourite])
            alert = !alert
        }
    }
    // remove favourite
    const removeFavourite = (event) => {
        console.log(event.target.parentElement)
        console.log("RIMUOVI!!")
        const myVect = [...favourite]
        let index = myVect.indexOf(event.target.parentElement)
        myVect.splice(index, 1)
        setFavourite(myVect)
       
    }

    return (
        <div className="main-page">
            <CercaFilm />
       
            {/* movie rows */}
            <MoviesTvRow category="TrendsMovie:" moviesOrTv={trendsMoviesOfWeek}  addFavourite={addFavourite} />
            {
                favourite.length > 0? <MoviesTvRow category="Preferiti" moviesOrTv={favourite} removeFavourite={removeFavourite} isFavourite={true}/> : null

            }
            
            <MoviesTvRow category="Commedie:" moviesOrTv={comedyMovies} addFavourite={addFavourite}/> 
            <MoviesTvRow category="Horror:" moviesOrTv={horrorMovies} addFavourite={addFavourite}/>
            <MoviesTvRow category="Animazione:" moviesOrTv={animationMovies} addFavourite={addFavourite}/>
            {/* movie rows */}
            <MoviesTvRow category="TrendsTv:" moviesOrTv={trendsTvOfWeek} addFavourite={addFavourite}/>
            <MoviesTvRow category="Fantascienza e Fantasy:" moviesOrTv={fantasyTv} addFavourite={addFavourite}/>
            <MoviesTvRow category="Commedie:" moviesOrTv={comedyTv} addFavourite={addFavourite}/>
            <MoviesTvRow category="Drama:" moviesOrTv={dramaTv} addFavourite={addFavourite}/>
            <MoviesTvRow category="Reality:" moviesOrTv={realityTv} addFavourite={addFavourite}/>

        </div>
    )
}

export default MainPage;