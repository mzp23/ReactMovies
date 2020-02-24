import React from 'react';
import styles from './style.module.scss';

const SearchBar = ({handleSearch, handleSearchRequest, value}) => {
    return (
        <div className={styles.container}>
        <input  type="text" className={styles.search_bar} onChange={(e) => handleSearch(e)} value={value} placeholder="Search by name" id="searchBar"  />
            <label onClick={(e) => handleSearchRequest(e)} htmlFor="searchBar"><span className={styles.img} role="img" aria-label="search bar">&#128269;</span></label>
        </div>
    );
};

export default SearchBar;