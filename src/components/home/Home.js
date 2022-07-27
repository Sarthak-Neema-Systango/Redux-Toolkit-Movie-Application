import React, { useEffect } from 'react'
import MovieAPI from '../../common/apis/MovieAPI'
import { APIKey } from '../../common/apis/MovieAPIkey'
import MovieListing from '../movieListing/MovieListing'

const Home = () => {
    useEffect(() => {
     const movieText = "Harry";
        const fetchMovies = async () => {
            const response = await MovieAPI.get(`?apikey=${APIKey}&s=${movieText}&type=movie`)
        .catch((error)=>{
            console.log("Error: ",error);
        });
        console.log(response);
        }
    }
    )
    return (
        <div>
            <MovieListing />
        </div>
    )
}

export default Home