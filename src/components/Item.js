import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import Flippy, { FrontSide, BackSide } from "react-flippy";
import axios from "axios";
import AddMovie from "./AddMovie";
import { MovieContext } from "./MovieContext";

const MovieCard = styled.div`
    color: black;
    padding: 5px 5px;
    border: 2px solid;
    background: lightyellow;
    text-align: center;
    border-radius: 1rem;
    width: 22rem;
    height: 35rem;
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-content: center;
    align-items: center;
`;

const Poster = styled.img`
    max-width: 95%;
    max-height: 95%;
`;

const CardDetails = styled.div`
    text-align: center;
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-content: center;
    align-items: center;
`;

const Title = styled.h3``;

const Detail = styled.p`
    padding: 0.8rem;
`;

const Score = styled.p`
    padding: 0.8rem;
    border: 2px solid;
    border-radius: 5rem;
    width: 3.5rem;
    background: yellow;
    font-weight: bold;
`;

const Item = (props) => {
    const [details, setDetails] = useState({});
    const [movies, setMovies] = useContext(MovieContext);

    useEffect(() => {
        axios
            .get("http://www.omdbapi.com/?apikey=530b6ee1&i=" + props.imdbid)
            .then((response) => {
                setDetails(response.data);
            });
    }, [props.imdbid]);

    return (
        <React.Fragment>
            <Flippy
                flipOnHover={false}
                flipOnClick={true}
                flipDirection="horizontal"
            >
                <FrontSide>
                    <MovieCard>
                        <Poster src={props.poster}></Poster>
                        <Title>{props.title}</Title>
                        <p>{props.year}</p>
                    </MovieCard>
                </FrontSide>

                <BackSide>
                    <MovieCard>
                        <CardDetails>
                            <Title>{details.Title}</Title>
                            <Score>{details.imdbRating}</Score>
                            <Detail>{details.Runtime}</Detail>
                            <Detail>{details.Genre}</Detail>
                            <Detail>{details.Plot}</Detail>
                            <Detail>
                                <AddMovie watchlist={details} />
                            </Detail>
                        </CardDetails>
                    </MovieCard>
                </BackSide>
            </Flippy>
        </React.Fragment>
    );
};

export default Item;
