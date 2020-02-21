import React from 'react';
import styles from './SearchBar.module.scss';

const SearchBar = () => {
    return (
        <>
        <input type="text" className={styles.search_bar} placeholder="Search by name" id="searchBar"/>
            <label htmlFor="searchBar">
                <span role="img" aria-label="search bar">&#128269;</span>
            </label>
        </>
    );
};

export default SearchBar;