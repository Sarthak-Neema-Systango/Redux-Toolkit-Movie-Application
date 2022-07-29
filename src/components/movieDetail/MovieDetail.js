import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchAsyncDetail, getSelectedItemDetail, removeSelectedMovieorShow } from '../../features/movies/movieSlice';
import "./movieDetail.scss";
const MovieDetail = () => {
    const { imdbID } = useParams();
    const dispatch = useDispatch();
    const movieOrShowsDetail = useSelector(getSelectedItemDetail)
    console.log("getSelectedItemDetail", movieOrShowsDetail);
    useEffect(() => {
        dispatch(fetchAsyncDetail(imdbID))
        return () => {
            dispatch(removeSelectedMovieorShow());
        }
    }, [dispatch, imdbID])

    const { imdbRating, imdbVotes, Year, Runtime, Plot, Director, Actors, Genre, Language, Awards, Poster, Title } = movieOrShowsDetail;

    return (
        <div className='movie-section'>
            {Object.keys(movieOrShowsDetail).length === 0 ?
                <div>...Loading</div>
                :
                <>
                    <div className='section-left'>
                        <div className='movie-title'>{Title}</div>
                        <div className='movie-rating'>
                            <span>
                                IMDB Rating <i className='fa fa star'></i> : {imdbRating}
                            </span>
                            <span>
                                IMDB Votes <i className='fa fa thumbs-up'></i> : {imdbVotes}
                            </span>
                            <span>
                                Runtime <i className='fa fa star'></i> : {Runtime}
                            </span>
                            <span>
                                Year <i className='fa fa star'></i> : {Year}
                            </span>
                        </div>
                        <div className='movie-plot'>{Plot}</div>
                        <div className='movie-info'>
                            <div>
                                <span>Director :</span>
                                <span>{Director}</span>
                            </div>
                            <div>
                                <span>Stars :</span>
                                <span>{Actors}</span>
                            </div>
                            <div>
                                <span>Geners :</span>
                                <span>{Genre}</span>
                            </div>
                            <div>
                                <span>Languages :</span>
                                <span>{Language}</span>
                            </div>
                            <div>
                                <span>Awards :</span>
                                <span>{Awards}</span>
                            </div>
                        </div>
                    </div>
                    <div className='right-section'>
                        <img src={Poster} alt={Title} />
                    </div>
                </>
            }
        </div>
    );
};

export default MovieDetail;