import styles from './style.module.scss';
import React from "react";

const Likes = ({likes, handleLike, movieId}) =>(  <p>Likes: {likes}
    <span className={styles.post_reaction} onClick={() => handleLike(movieId, likes + 1)} role="img" aria-label="like">
        &#128077;
    </span>
    <span className={styles.post_reaction} onClick={() => handleLike(movieId, likes - 1)} role="img" aria-label="dislike">
        &#128078;
    </span>
</p>);

export default Likes;