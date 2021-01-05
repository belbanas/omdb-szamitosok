import React from "react";
import styled from "styled-components";

const SearchBarStyle = styled.div`
    font-weight: bold;
    text-align: center;
`;

const MainPage = (props) => {
    const handleSearch = (event) => {
        console.log(event.target.value);
    };

    return (
        <React.Fragment>
            <SearchBarStyle>
                <input
                    name="search"
                    type="text"
                    placeholder="Search a movie or Tv Show"
                    onChange={handleSearch}
                />
                teszt
            </SearchBarStyle>
        </React.Fragment>
    );
};

export default MainPage;
