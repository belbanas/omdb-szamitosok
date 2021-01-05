import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import Item from "./Item";

const WrapStyle = styled.div`
	width: 30%;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
`;

const SearchStyle = styled.div`
	position: relative;
	display: flex;
`;

const InputStyle = styled.input`
	width: 5000px;
	border: 2px solid black;
	border-right: none;
	padding: 5px;
	height: 50px;
	border-radius: 5px 0 0 5px;
	outline: none;
	font-size: 1.5rem;
`;

const SearchButton = styled.button`
	width: 500px;
	height: 50px;
	border: 1px solid black;
	background: #00b4cc;
	text-align: center;
	color: #fff;
	border-radius: 0 5px 5px 0;
	cursor: pointer;
	font-size: 20px;
`;

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
			<WrapStyle>
				<SearchStyle>
				<form>
					<InputStyle placeholder='Search' name="search"
                        type="text"
                        placeholder="Start typing"
                        onChange={handleChange}></InputStyle>
					<SearchButton>
						<img
							src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Magnifying_glass_icon.svg/1200px-Magnifying_glass_icon.svg.png'
							height='33'
							width='32'
							alt=''
						></img>
					</SearchButton>
					</form>
				</SearchStyle>
			</WrapStyle>
        </React.Fragment>
	);
}

export default MainPage;