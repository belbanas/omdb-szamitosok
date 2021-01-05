import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import Item from "./Item";

const SearchBarStyle = styled.div`
    text-align: center;
`;

const MainPage = () => {
    const [results, setResults] = useState([]);
    const [value, setValue] = useState("");

    useEffect(() => {
        axios
            .get("http://www.omdbapi.com/?apikey=530b6ee1&s=" + value)
            .then((response) => {
                if (response.data.Response === "True") {
                    console.log(response.data.Search);
                    setResults(response.data.Search);
                }
            });
    }, [value]);

    const getResults = () => {
        if (results.length >= 0) {
            return results.map((item) => (
                <Item
                    key={item.imdbID}
                    title={item.Title}
                    year={item.Year}
                    type={item.Type}
                    poster={item.Poster}
                />
            ));
        } else {
            return <h1>Nincs</h1>;
        }
    };

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    const handleClick = (e) => {
        e.preventDefault();
        console.log(value);
    };

    return (
        <React.Fragment>
            <SearchBarStyle>
                <form>
                    <input
                        name="search"
                        type="text"
                        placeholder="Start typing"
                        onChange={handleChange}
                    />
                    <button type="submit" onClick={handleClick}>
                        Search
                    </button>
                </form>
                teszt
                {getResults()}
            </SearchBarStyle>
        </React.Fragment>
    );
};

export default MainPage;
