import React, { useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { MovieContext } from "../MovieContext";

const NavbarDiv = styled.div`
    background: #fff;
    border-radius: 1rem;
    border: 1px solid;
    padding: 1rem;
`;

const Item = styled.b`
    margin: 8px;
`;

const Navbar = (props) => {
    const [movies, setMovies] = useContext(MovieContext);

    return (
        <NavbarDiv className="navbar">
            <Item>
                <Link to="/">Home</Link>
            </Item>
            <Item>
                <Link to="/watchlist">Watch List: {movies.watchlist.length}</Link>
            </Item>
            <Item>
                <Link to="/seen">Already Watched</Link>
            </Item>
        </NavbarDiv>
    );
};

export default Navbar;
