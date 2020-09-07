import React, { useState } from "react";
import styles from "./style.module.scss";
import PropTypes from "prop-types";
import { movieShape } from "../../helpers/propTypeShapes";

const SearchBar = ({ searchTitle, movies, handleSearchResult }) => {
  const [searchInput, setSearchInput] = useState("");

  const handleSearch = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSearchRequest = () => {
    const string = searchInput
      .split(" ")
      .filter((el) => el)
      .join(" ");
    const regExp = new RegExp(string, "i");
    const filteredMovies = movies.filter((el) => el.title.match(regExp));
    const moviesToRender = string.trim() ? filteredMovies : movies;
    handleSearchResult(moviesToRender);
    setSearchInput("");
  };

  return (
    <div className={styles.container}>
      <input
        type="text"
        className={styles.searchBar}
        onChange={(e) => handleSearch(e)}
        value={searchInput}
        placeholder={searchTitle}
        id="searchBar"
      />
      <label onClick={(e) => handleSearchRequest(e)} htmlFor="searchBar">
        <span className={styles.img} role="img" aria-label="search bar">
          &#128269;
        </span>
      </label>
    </div>
  );
};

export default SearchBar;

SearchBar.propTypes = {
  movies: PropTypes.arrayOf(movieShape),
  handleSearchResult: PropTypes.func,
};
