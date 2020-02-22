import uuid from "uuid";
import React from "react";

export const starsRender = (stars) => {
   return (<div>{
        [...new Array(5)].map((elem, index) => {
        const goldStar = <span className="stars" key={uuid()} role="img" aria-label="gold star" >&#11088;</span>;
        const emptyStar = <span className="stars" key={uuid()} role="img" aria-label="empty star">&#x2606;</span>;

        return elem = index + 1 <= stars ? goldStar : emptyStar;
    })}
    </div>)
};