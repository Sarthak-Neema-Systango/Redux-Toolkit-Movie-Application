import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { fetchAsyncSearch, getAllMovies, getAllShows } from '../../features/movies/movieSlice';
import user from "../../images/user.png"
import './Header.scss';
const Header = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  let movieList = useSelector(getAllMovies);
  let showList = useSelector(getAllShows);

  return (
    <div className='header'>
      <Link to="/">
        <div className="logo">Movie App</div>
      </Link>
      <div className="user-image">
        <img src={user} alt="user" />
      </div>
    </div>
  )
}

export default Header