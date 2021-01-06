import React, { useState, useContext } from "react";
import { MovieContext } from "./MovieContext";
import Item from "./Item";
import styled from "styled-components";

const MovieCards = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
`;

const Movies = () => {
    const [movies, setMovies] = useContext(MovieContext);

    const getWatchlist = () => {
        if (movies.watchlist.length >= 0) {
            return movies.watchlist.map((item) => (
                <Item
                    key={item.imdbID}
                    title={item.Title}
                    year={item.Year}
                    type={item.Type}
                    poster={item.Poster}
                    imdbid={item.imdbID}
                />
            ));
        } else {
            return <h1>Nincs</h1>;
        }
    };

    return (
        <div>
            <MovieCards>{getWatchlist()}</MovieCards>
        </div>
    );
};

export default Movies;
