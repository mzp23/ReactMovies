import React from 'react';
import styles from './SearchBar.module.scss';

const SearchBar = () => {
    return (
        <div className={styles.search_bar_container}>
        <input type="text" className={styles.search_bar} placeholder="Search by name" id="searchBar"/>
        <span className={styles.search_bar_img} role="img" aria-label="search bar">&#128269;</span>
        </div>
    );
};

export default SearchBar;