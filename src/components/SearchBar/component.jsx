import React from "react";
import PropTypes from "prop-types";
import styles from "./style.module.scss";
import withTranslate from "../../hoc/withTranslation";

const SearchBar = ({ handleSearch, handleSearchRequest, value, words }) => {
  return (
    <div className={styles.container}>
      <input
        type="text"
        className={styles.searchBar}
        onChange={e => handleSearch(e)}
        value={value}
        placeholder={words['app-search-bar-placeholder']}
        id="searchBar"
      />
      <label onClick={e => handleSearchRequest(e)} htmlFor="searchBar">
        <span className={styles.img} role="img" aria-label="search bar">
          &#128269;
        </span>
      </label>
    </div>
  );
};

export default withTranslate(SearchBar);

SearchBar.propTypes = {
  handleSearch: PropTypes.func,
  handleSearchRequest: PropTypes.func,
  value: PropTypes.string
};
