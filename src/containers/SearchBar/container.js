import React, { useState } from "react";
import styles from "./style.module.scss";
import PropTypes from "prop-types";
import { movieShape } from "../../helpers/propTypeShapes";

import { handleSearch } from "../App/actions";
import { connect } from "react-redux";
import { getMovies } from "../App/selectors";

const SearchBar = ({ searchTitle, handleSearch }) => {
  const [searchInput, setSearchInput] = useState("");

  const handleSearchRequest = () => {
    const string = searchInput
      .split(" ")
      .filter((el) => el)
      .join(" ");
    const regExp = new RegExp(string, "i");
    const searchParams = string.trim() ? regExp : "";
    handleSearch(searchParams);
    setSearchInput("");
  };

  return (
    <div className={styles.container}>
      <input
        type="text"
        className={styles.searchBar}
        onChange={(e) => setSearchInput(e.target.value)}
        value={searchInput}
        placeholder={searchTitle}
        id="searchBar"
      />
      <label onClick={handleSearchRequest} htmlFor="searchBar">
        <span className={styles.img} role="img" aria-label="search bar">
          &#128269;
        </span>
      </label>
    </div>
  );
};

const mapDispatchToProps = {
  handleSearch,
};

export default connect(null, mapDispatchToProps)(SearchBar);

SearchBar.propTypes = {
  movies: PropTypes.arrayOf(movieShape),
  handleSearchResult: PropTypes.func,
};
