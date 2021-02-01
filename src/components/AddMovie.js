import React, { useContext } from "react";
import { MovieContext } from "./MovieContext";
import styled from "styled-components";
import axios from "axios";

const Button = styled.button`
    padding: 0.5rem;
    margin: 0.5rem;
`;

const AddMovie = (props) => {
    const [movies, setMovies] = useContext(MovieContext);

    let config = {
        headers: {
            Authorization: "Bearer " + sessionStorage.getItem("token"),
        },
    };

    let data = {
        imdb_id: props.movie.imdbID,
    };

    const addMovie = () => {
        axios
            .post("http://127.0.0.1:8000/api/watchlist", data, config)
            .then((response) => console.log(response));
    };

    const addMovieTwo = () => {
        if (!movies.alreadyWatched.includes(props.movie.Title)) {
            setMovies({
                watchlist: [...movies.watchlist],
                alreadyWatched: [...movies.alreadyWatched, props.movie.Title],
            });
        } else {
            let filteredArray = movies.alreadyWatched.filter(
                (title) => title !== props.movie.Title
            );
            setMovies({
                watchlist: [...movies.watchlist],
                alreadyWatched: filteredArray,
            });
        }
    };

    const removeFromWatchlist = () => {
        axios
            .post("http://127.0.0.1:8000/api/delete", data, config)
            .then((response) => {
                console.log(response);
                alert(response.data.message);
                window.location.href = "/watchlist";
            });
    };

    if (sessionStorage.getItem("token")) {
        return (
            <React.Fragment>
                <Button type="submit" onClick={addMovie}>
                    Add to Watchlist
                </Button>
                <Button onClick={removeFromWatchlist}>
                    Remove from watchlist
                </Button>

                {/* <Button type="submit" onClick={addMovieTwo}>
					Seen
				</Button> */}
            </React.Fragment>
        );
    } else {
        return null;
    }
};

export default AddMovie;
