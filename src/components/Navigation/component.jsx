import React from 'react';
import {Link} from "react-router-dom";
import styles from './styles.module.scss';
import {Routes} from "../../constants";

const Navigation = () => {
    return (
        <nav>
            <ul className={styles.navigation}>
                <li className={styles.navigationItem}>
                    <Link to="/">Movies</Link>
                </li>
                <li className={styles.navigationItem}>
                    <Link to={Routes.LOGIN}>Login</Link>
                </li>
                <li className={styles.navigationItem}>
                    <Link to={Routes.REGISTER}>Register</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;
