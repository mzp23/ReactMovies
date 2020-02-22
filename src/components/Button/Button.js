import React from 'react';
import styles from './Button.module.scss';
const Button = ({title, handleClick}) => {
    return (
        <button className={styles.button} onClick={handleClick}>{title}</button>
    );
};

export default Button;
