import React from 'react';
import styles from './SearchBar.module.scss';

const SearchBar = () => {
    return (
        <input type="text" className={styles.search_bar} placeholder="Search by name"/>
    );
};

export default SearchBar;