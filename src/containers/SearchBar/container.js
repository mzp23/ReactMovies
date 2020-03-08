import React, { Component } from "react";
import styles from "./style.module.scss";
import PropTypes from "prop-types";
import {movieShape} from "../../helpers/propTypeShapes";

class SearchBar extends Component {
  state = {
    searchInput: ""
  };

  handleSearch = e => {
    this.setState({ searchInput: e.target.value });
  };

  handleSearchRequest = () => {
    const { searchInput } = this.state;
    const { movies, handleSearchResult } = this.props;
    const string = searchInput
      .split(" ")
      .filter(el => el)
      .join(" ");
    const regExp = new RegExp(string, "i");
    const filteredMovies = movies.filter(el => el.title.match(regExp));
    const moviesToRender = string.trim() ? filteredMovies : movies;
    handleSearchResult(moviesToRender);
    this.setState({
      searchInput: ""
    });
  };

  render() {
    const {searchTitle} = this.props;
    const { searchInput } = this.state;
    return (
      <div className={styles.container}>
        <input
          type="text"
          className={styles.searchBar}
          onChange={e => this.handleSearch(e)}
          value={searchInput}
          placeholder={searchTitle}
          id="searchBar"
        />
        <label onClick={e => this.handleSearchRequest(e)} htmlFor="searchBar">
          <span className={styles.img} role="img" aria-label="search bar">
            &#128269;
          </span>
        </label>
      </div>
    );
  }
}

export default SearchBar

SearchBar.propTypes = {
  movies: PropTypes.arrayOf(movieShape),
  handleSearchResult: PropTypes.func
};
