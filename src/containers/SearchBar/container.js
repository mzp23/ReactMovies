import React, {Component} from 'react';
import styles from './style.module.scss';

export default class SearchBar extends Component {
    state = {
        searchInput: ''
    };

    handleSearch = (e) => {
        this.setState({searchInput: e.target.value})
    };

    handleSearchRequest = () => {
        const string = this.state.searchInput.split(" ").filter(el => el).join(" ");
        const regExp = new RegExp(string, 'i');
        const filteredMovies = this.props.movies.filter(el => el.title.match(regExp));
        const moviesToRender = string.trim() ? filteredMovies : this.props.movies;
        this.props.handleSearchResult(moviesToRender);
        this.setState({
            searchInput: ''
        });
    };
    render() {
        return (
            <div className={styles.container}>
            <input  type="text" className={styles.search_bar} onChange={(e) => this.handleSearch(e)} value={this.state.searchInput} placeholder="Search by name" id="searchBar"  />
                <label onClick={(e) => this.handleSearchRequest(e)} htmlFor="searchBar"><span className={styles.img} role="img" aria-label="search bar">&#128269;</span></label>
            </div>
        );
    }

};

