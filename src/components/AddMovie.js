import React, { useContext } from "react";
import { MovieContext } from "./MovieContext";
import styled from "styled-components";

const Button = styled.button`
    padding: 0.5rem;
    margin: 0.5rem;
`;

const AddMovie = (props) => {
    const [movies, setMovies] = useContext(MovieContext);

    const addMovie = () => {
        if (!movies.watchlist.includes(props.watchlist)) {
            setMovies({
                watchlist: [...movies.watchlist, props.watchlist],
            });
        } else {
            alert("Already added!");
        }
    };

    return (
        <Button type="submit" onClick={addMovie}>
            Add to Watchlist
        </Button>
    );
};

export default AddMovie;
