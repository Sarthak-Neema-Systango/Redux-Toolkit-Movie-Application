import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import MovieAPI from '../../common/apis/MovieAPI'
import { APIKey } from '../../common/apis/MovieAPIkey'
import { addMovies } from '../../features/movies/movieSlice'
import MovieListing from '../movieListing/MovieListing'

const Home = () => {
    const movieText = "Harry";
    const dispatch = useDispatch();
    useEffect(() => {
        const fetchMovies = async () => {
            const response = await MovieAPI.get( `?apiKey=${APIKey}&s=${movieText}&type=movie`)
                .catch((error) => {
                    console.log("Error: ", error);
                });
                console.log("The response from API", response.data);
            dispatch(addMovies(response.data))
        };
        fetchMovies()   
    }, [dispatch])
    return (
        <div>
            <div className='banner-img'>
                <MovieListing />
            </div>
        </div>
    )
}

export default Home