import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import MoviesTvRow from "./MoviesTvRow";
import CercaFilm from "./CercaFilm";
import Footer from "./Footer"
import urls from "../scripts/baseUrls";
import ids from "../scripts/genresIds";
import "../style/MainPage.scss";

const MainPage = () => {


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
        if (search !== "") {
            const response = await axios.get(urlForSearch + search);
            setSearchResults(response.data);
        } else {
            setSearchResults([]);
        }
    }

    // fetch movies
    const fetchTrendsMovies = () => {

        axios.get(urls.urlTrendsMoviesWeek).then((response) => {
            setTrendsMoviesOfWeek(response.data);
        });
    };

    const fetchHorrorMovies = () => {
        axios.get(urls.discoverMovieUrl + ids.idHorrorMovies).then((response) => {
            setHorrorMovies(response.data);
        });
    };

    const fetchComedyMovies = () => {
        axios.get(urls.discoverMovieUrl + ids.idComedyMovies).then((response) => {
            setComedyMovies(response.data);
        });
    };
    const fetchActionMovies = () => {
        axios.get(urls.discoverMovieUrl + ids.idActionMovies).then((response) => {
            setActionMovies(response.data);
        });
    };
    const fetchAnimationMovies = () => {
        axios.get(urls.discoverMovieUrl + ids.idAnimationMovies).then((response) => {
            setAnimationMovies(response.data);
        });
    };

    // fetch tv shows
    const fetchTrendsTv = () => {
        axios.get(urls.urlTrendsTvWeek).then((response) => {
            setTrendsTvOfWeek(response.data);
        });
    };
    const fetchFantasyTv = () => {
        axios.get(urls.discoverTvUrl + ids.idFantasyTv).then((response) => {
            setFantasyTv(response.data);
        });
    };
    const fetchComedyTv = () => {
        axios.get(urls.discoverTvUrl + ids.idComedyTv).then((response) => {
            setComedyTv(response.data);
        });
    };
    const fetchDramaTv = () => {
        axios.get(urls.discoverTvUrl + ids.idDramaTv).then((response) => {
            setDramaTv(response.data);
        });
    };
    const fetchRealityTv = () => {
        axios.get(urls.discoverTvUrl + ids.idRealityTv).then((response) => {
            setRealityTv(response.data);
        });
    };

    const fetchTrailerMovie = (event) => {
        axios.get("http://localhost:2000/api/video/movie/" + event.target.parentElement.id)
            .then((response) => {
                setTrailer(response.data);
            }
            );
    }

    const fetchTrailerTv = (event) => {
        axios.get("http://localhost:2000/api/video/tv/" + event.target.parentElement.id)
            .then((response) => {
                setTrailer(response.data);
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
                    category="I tuoi preferiti"
                    moviesOrTv={favourites}
                    removeFavourite={removeFavourite}
                    isFavourite={true}
                    addFavourite={addFavourite}
                    trailer={trailer}
                    fetchTrailer={fetchTrailerMovie}
                />
            )}
            {/* movie rows */}
            <h2 className="m-0 ms-4 ps-3 fs-1 fw-bolder text-white ">I Film</h2>
            <MoviesTvRow
                category="I più visti della settimana:"
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
            <h2 className="m-0 ms-4 ps-3 fs-1 fw-bolder text-white ">Le Serie TV</h2>
            <MoviesTvRow
                category="Le più viste della settimana:"
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
