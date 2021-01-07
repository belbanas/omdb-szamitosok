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
    text-decoration: none;
    margin: 8px;
`;

const linkStyle = {
    color: "black",
    textDecoration: "none"
}

const Navbar = (props) => {
    const [movies, setMovies] = useContext(MovieContext);

    return (
        <NavbarDiv className="navbar">
            <Item>
                <Link to="/" style={linkStyle}>Home</Link>
            </Item>
            <Item>
                <Link to="/watchlist" style={linkStyle}>
                    Watch List: {movies.watchlist.length}
                </Link>
            </Item>
            <Item>
                Already Watched: {movies.alreadyWatched.length}{" "}
            </Item>
        </NavbarDiv>
    );
};

export default Navbar;
