import React, { useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { MovieContext } from "../MovieContext";
import Logout from "../Logout";

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

const Item2 = styled.b`
    text-decoration: none;
    margin: 8px;
    color: red;
`;

const linkStyle = {
    color: "black",
    textDecoration: "none",
};

const Navbar = (props) => {
    const [movies, setMovies] = useContext(MovieContext);

    let loginText = "You are not logged in!";

    if (sessionStorage.getItem("token")) {
        loginText =
            "You are logged in as: " + sessionStorage.getItem("username");
    }

    return (
        <NavbarDiv className="navbar">
            <Item>
                <Link to="/" style={linkStyle}>
                    Home
                </Link>
            </Item>
            {" | "}
            <Item>
                <Link to="/watchlist" style={linkStyle}>
                    Watch List
                    {/* : {movies.watchlist.length} */}
                </Link>
            </Item>
            {" | "}
            {/* <Item>Already Watched: {movies.alreadyWatched.length} </Item> */}
            <Item>
                <Link to="/register" style={linkStyle}>
                    Registration
                </Link>
            </Item>
            {" | "}
            <Item>
                <Link to="/login" style={linkStyle}>
                    Login
                </Link>
            </Item>
            {" | "}
            <Item>
                <Logout />
            </Item>
            {" | "}
            <Item>{loginText}</Item>
        </NavbarDiv>
    );
};

export default Navbar;
