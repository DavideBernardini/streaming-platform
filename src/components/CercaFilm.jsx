import React, { useState, useEffect } from "react";
import axios from "axios";
// http://localhost:2000/api/title/search/:type/:query

const CercaFilm = () => {
    const urlSearch = "http://localhost:2000/api/title/search/movie/";
    const [myData, setMyData] = useState(
        {
            film: []
        });
  
    const [search, setSearch] = useState("");

    useEffect(() => {
        axios.get(urlSearch + search)
            .then((response) => {
                console.log(response.data);
                setMyData(
                    {
                    film: response.data
                });
            })
    }, [search])

    const handleChange = (event) => {
        setSearch(event.target.value);
    }

    return (
        <div className="text-center">
            <input type="text" value={search} onChange={handleChange} />
            <ul>
                {
                    myData.film.map((item, index) => (
                        <li key={index}>
                            {item.title}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}
   
export default CercaFilm;

    /*
     return (
        <div className="text-center">
        <h1>Cerca un film</h1>
        <form>
            <input
            type="text"
            className="form-control"
            placeholder="Inserisci il titolo del film"
            onChange={props.onChange}
            />
        </form>
        </div>
    );
    */