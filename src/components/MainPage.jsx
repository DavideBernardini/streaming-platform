import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import MoviesTvRow from "./MoviesTvRow";
import CercaFilm from "./CercaFilm";
import Footer from "./Footer"
import "../style/MainPage.scss";

const MainPage = () => {
    // base urls
    const discoverMovieUrl = "http://localhost:2000/api/movie/search/";
    const discoverTvUrl = "http://localhost:2000/api/tv/search/";
    const urlTrendsMoviesWeek = "http://localhost:2000/api/movie/trends/movie/week";
    const urlTrendsTvWeek = "http://localhost:2000/api/movie/trends/tv/week";

    // ids
    const idHorrorMovies = 27;
    const idComedyMovies = 35;
    const idAnimationMovies = 16;
    const idActionMovies = 28;
    const idFantasyTv = 10765;
    const idComedyTv = 35;
    const idDramaTv = 18;
    const idRealityTv = 10764;

    // search results
    const [searchResults, setSearchResults] = useState([]);
    const [typeSearch, setTypeSearch] = useState("movie");
    const [search, setSearchQuery] = useState("");
    const urlForSearch = "http://localhost:2000/api/title/search/" + typeSearch + "/";

    // movies
    let [trendsMoviesOfWeek, setTrendsMoviesOfWeek] = useState(null);
    let [horrorMovies, setHorrorMovies] = useState(null);
    let [comedyMovies, setComedyMovies] = useState(null);
    let [animationMovies, setAnimationMovies] = useState(null);
    let [actionMovies, setActionMovies] = useState(null);
    // tv shows
    let [trendsTvOfWeek, setTrendsTvOfWeek] = useState(null);
    let [fantasyTv, setFantasyTv] = useState(null);
    let [comedyTv, setComedyTv] = useState(null);
    let [dramaTv, setDramaTv] = useState(null);
    let [realityTv, setRealityTv] = useState(null);

    //add favourite
    const [favourites, setFavourites] = useState([]);
    let favUpdater = false;

    // trailer
    let [trailer, setTrailer] = useState('')

    useEffect(() => {

        fetchSearch();

        fetchTrendsMovies();
        fetchComedyMovies();
        fetchHorrorMovies();
        fetchActionMovies();
        fetchAnimationMovies();

        fetchTrendsTv();
        fetchFantasyTv();
        fetchComedyTv();
        fetchDramaTv();
        fetchRealityTv();

    }, [favUpdater, search, typeSearch]);

    const fetchSearch = async () => {

        axios.get(urlForSearch + search).then((response) => {
            setSearchResults(response.data);
        });
    }

    // fetch movies
    const fetchTrendsMovies = () => {

        axios.get(urlTrendsMoviesWeek).then((response) => {
            setTrendsMoviesOfWeek(response.data);
        });
    };

    const fetchHorrorMovies = () => {
        axios.get(discoverMovieUrl + idHorrorMovies).then((response) => {
            setHorrorMovies(response.data);
        });
    };

    const fetchComedyMovies = () => {
        axios.get(discoverMovieUrl + idComedyMovies).then((response) => {
            setComedyMovies(response.data);
        });
    };
    const fetchActionMovies = () => {
        axios.get(discoverMovieUrl + idActionMovies).then((response) => {
            setActionMovies(response.data);
        });
    };
    const fetchAnimationMovies = () => {
        axios.get(discoverMovieUrl + idAnimationMovies).then((response) => {
            setAnimationMovies(response.data);
        });
    };

    // fetch tv shows
    const fetchTrendsTv = () => {
        axios.get(urlTrendsTvWeek).then((response) => {
            setTrendsTvOfWeek(response.data);
        });
    };
    const fetchFantasyTv = () => {
        axios.get(discoverTvUrl + idFantasyTv).then((response) => {
            setFantasyTv(response.data);
        });
    };
    const fetchComedyTv = () => {
        axios.get(discoverTvUrl + idComedyTv).then((response) => {
            setComedyTv(response.data);
        });
    };
    const fetchDramaTv = () => {
        axios.get(discoverTvUrl + idDramaTv).then((response) => {
            setDramaTv(response.data);
        });
    };
    const fetchRealityTv = () => {
        axios.get(discoverTvUrl + idRealityTv).then((response) => {
            setRealityTv(response.data);
        });
    };

    // get trailer TODO: usare express
    const fetchTrailerMovie = (event) => {

        const APY_KEY = "c0af7194607876d6036970e4504abc6d";
        let urlTrailerYT = "https://www.youtube.com/embed/";
        let urlTrailer = 'https://api.themoviedb.org/3/movie/' + event.target.parentElement.id + '/videos?api_key=' + APY_KEY;

        axios.get(urlTrailer).then((response) => {

            response.data.results.forEach(result => {
                if (result.site === "YouTube")
                    setTrailer(urlTrailerYT + result.key);
                else
                    setTrailer('https://www.youtube.com/embed/n3k2a35dBis');
            });

        }
        );

    }

    const fetchTrailerTv = (event) => {

        const APY_KEY = "c0af7194607876d6036970e4504abc6d";
        let urlTrailerYT = "https://www.youtube.com/embed/";
        let urlTrailer = 'https://api.themoviedb.org/3/tv/' + event.target.parentElement.id + '/videos?api_key=' + APY_KEY;

        axios.get(urlTrailer).then((response) => {
            response.data.results.forEach(result => {
                if (result.site === "YouTube")
                    setTrailer(urlTrailerYT + result.key);
                else
                    setTrailer('https://www.youtube.com/embed/n3k2a35dBis');
            });
        }
        );

    }

    // functions for search
    const getQuerySearch = (event) => {
        setSearchQuery(event.target.value);
    }

    const getTypeSelect = (event) => {
        setTypeSearch(event.target.value);
    }

    // add favourite
    const addFavourite = (event) => {
        console.log(event.target.parentElement.id);
        console.log("ADDA");

        let newFavourite = null;

        if (
            trendsMoviesOfWeek.find((obj) => Number(obj.id) === Number(event.target.parentElement.id))
        ) {
            for (let i = 0; i < trendsMoviesOfWeek.length; i++) {
                if (
                    Number(trendsMoviesOfWeek[i].id) ===
                    Number(event.target.parentElement.id)
                ) {
                    newFavourite = trendsMoviesOfWeek[i];
                }
            }

        }
        else if (horrorMovies.find((obj) => Number(obj.id) === Number(event.target.parentElement.id))
        ) {
            for (let i = 0; i < horrorMovies.length; i++) {
                if (
                    Number(horrorMovies[i].id) ===
                    Number(event.target.parentElement.id)
                ) {
                    newFavourite = horrorMovies[i];
                }
            }
        }
        else if (comedyMovies.find((obj) => Number(obj.id) === Number(event.target.parentElement.id))
        ) {
            for (let i = 0; i < comedyMovies.length; i++) {
                if (
                    Number(comedyMovies[i].id) ===
                    Number(event.target.parentElement.id)
                ) {
                    newFavourite = comedyMovies[i];
                }
            }
        }
        else if (animationMovies.find((obj) => Number(obj.id) === Number(event.target.parentElement.id))
        ) {
            for (let i = 0; i < animationMovies.length; i++) {
                if (
                    Number(animationMovies[i].id) ===
                    Number(event.target.parentElement.id)
                ) {
                    newFavourite = animationMovies[i];
                }
            }
        }
        else if (actionMovies.find((obj) => Number(obj.id) === Number(event.target.parentElement.id))
        ) {
            for (let i = 0; i < actionMovies.length; i++) {
                if (
                    Number(actionMovies[i].id) ===
                    Number(event.target.parentElement.id)
                ) {
                    newFavourite = actionMovies[i];
                }
            }
        }
        else if (trendsTvOfWeek.find((obj) => Number(obj.id) === Number(event.target.parentElement.id))
        ) {
            for (let i = 0; i < trendsTvOfWeek.length; i++) {
                if (
                    Number(trendsTvOfWeek[i].id) ===
                    Number(event.target.parentElement.id)
                ) {
                    newFavourite = trendsTvOfWeek[i];
                }
            }
        }
        else if (fantasyTv.find((obj) => Number(obj.id) === Number(event.target.parentElement.id))
        ) {
            for (let i = 0; i < fantasyTv.length; i++) {
                if (
                    Number(fantasyTv[i].id) ===
                    Number(event.target.parentElement.id)
                ) {
                    newFavourite = fantasyTv[i];
                }
            }
        }
        else if (comedyTv.find((obj) => Number(obj.id) === Number(event.target.parentElement.id))
        ) {
            for (let i = 0; i < comedyTv.length; i++) {
                if (
                    Number(comedyTv[i].id) ===
                    Number(event.target.parentElement.id)
                ) {
                    newFavourite = comedyTv[i];
                }
            }
        }
        else if (dramaTv.find((obj) => Number(obj.id) === Number(event.target.parentElement.id))
        ) {
            for (let i = 0; i < dramaTv.length; i++) {
                if (
                    Number(dramaTv[i].id) ===
                    Number(event.target.parentElement.id)
                ) {
                    newFavourite = dramaTv[i];
                }
            }
        }
        else if (realityTv.find((obj) => Number(obj.id) === Number(event.target.parentElement.id))
        ) {
            for (let i = 0; i < realityTv.length; i++) {
                if (
                    Number(realityTv[i].id) ===
                    Number(event.target.parentElement.id)
                ) {
                    newFavourite = realityTv[i];
                }
            }
        } else if (searchResults.find((obj) => Number(obj.id) === Number(event.target.parentElement.id))
        ) {
            for (let i = 0; i < searchResults.length; i++) {
                if (
                    Number(searchResults[i].id) ===
                    Number(event.target.parentElement.id)
                ) {
                    newFavourite = searchResults[i];
                }
            }
        }
     
        // filtro per i doppioni
        if (!favourites.includes(newFavourite)) {
            setFavourites([...favourites, newFavourite]);
            favUpdater = !favUpdater;
        }
    };
    // remove favourite
    const removeFavourite = (event) => {

        const myVect = [...favourites];
        let index = myVect.indexOf(event.target.parentElement);
        myVect.splice(index, 1);

        setFavourites(myVect);
    };

    return (
        <div className="main-page">
            <CercaFilm
                searchResults={searchResults}
                getTypeSelect={getTypeSelect}
                getQuerySearch={getQuerySearch}
                addFavourite={addFavourite}
                trailer={trailer}
                fetchTrailer={fetchTrailerMovie}
            />


            {/* movie rows */}
            {favourites.length > 0 && (
                <MoviesTvRow
                    category="Preferiti"
                    moviesOrTv={favourites}
                    removeFavourite={removeFavourite}
                    isFavourite={true}
                    addFavourite={addFavourite}
                    trailer={trailer}
                    fetchTrailer={fetchTrailerMovie}
                />
            )}
            {/* movie rows */}
            <MoviesTvRow
                category="TrendsMovie:"
                moviesOrTv={trendsMoviesOfWeek}
                addFavourite={addFavourite}
                trailer={trailer}
                fetchTrailer={fetchTrailerMovie}
            />
            <MoviesTvRow
                category="Commedie:"
                moviesOrTv={comedyMovies}
                addFavourite={addFavourite}
                trailer={trailer}
                fetchTrailer={fetchTrailerMovie}
            />
            <MoviesTvRow
                category="Horror:"
                moviesOrTv={horrorMovies}
                addFavourite={addFavourite}
                trailer={trailer}
                fetchTrailer={fetchTrailerMovie}
            />
            <MoviesTvRow
                category="Animazione:"
                moviesOrTv={animationMovies}
                addFavourite={addFavourite}
                trailer={trailer}
                fetchTrailer={fetchTrailerMovie}
            />
            <MoviesTvRow
                category="Azione:"
                moviesOrTv={actionMovies}
                addFavourite={addFavourite}
                trailer={trailer}
                fetchTrailer={fetchTrailerMovie}
            />

            {/* tv rows */}
            <MoviesTvRow
                category="TrendsTv:"
                moviesOrTv={trendsTvOfWeek}
                addFavourite={addFavourite}
                trailer={trailer}
                fetchTrailer={fetchTrailerTv}
            />
            <MoviesTvRow
                category="Fantascienza e Fantasy:"
                moviesOrTv={fantasyTv}
                addFavourite={addFavourite}
                trailer={trailer}
                fetchTrailer={fetchTrailerTv}
            />
            <MoviesTvRow
                category="Commedie:"
                moviesOrTv={comedyTv}
                addFavourite={addFavourite}
                trailer={trailer}
                fetchTrailer={fetchTrailerTv}
            />
            <MoviesTvRow
                category="Drama:"
                moviesOrTv={dramaTv}
                addFavourite={addFavourite}
                trailer={trailer}
                fetchTrailer={fetchTrailerTv}
            />
            <MoviesTvRow
                category="Reality:"
                moviesOrTv={realityTv}
                addFavourite={addFavourite}
                trailer={trailer}
                fetchTrailer={fetchTrailerTv}
            />
            <Footer></Footer>
        </div>
    );
};

export default MainPage;
