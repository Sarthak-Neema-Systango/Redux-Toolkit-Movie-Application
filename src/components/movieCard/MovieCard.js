import React from 'react';
import "./movieCard.scss";

const MovieCard = (props) => {
    console.log(props);
    const {data} = props;
    return (
        <div className='card-item'>
        <div className='card-inner'>
        <div className='card-top'>
            <img src= {data.Poster} alt = {data.title} />
        </div>
        <div className='card-bottom'>
            <h4>{data.Title}</h4>
            <p>{data.Year}</p>
        </div>
        </div>
        </div>
    );
};

export default MovieCard;