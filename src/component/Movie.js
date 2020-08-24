import React from "react";
import {useSelector, useDispatch} from 'react-redux'
import {increment, decrement} from '../actions'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
library.add( faHeart)

const DEFAULT_PLACEHOLDER_IMAGE =
  "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg";

const Movie = ({ movie }) => {
  const poster =
    movie.Poster === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : movie.Poster;
    const counter = useSelector (state => state.counter );
    const isLogged = useSelector (state => state.isLogged);
    const dispatch = useDispatch ();
  return (
    <div className="movie">
     
      <div>
        <img
          width="200"
          alt={`The movie titled: ${movie.Title}`}
          src={poster}
        ></img>
        
      </div>
      <span class="nm-collections-title-name">{movie.Title}</span>
      <center><a onClick={()=> dispatch(increment())}><FontAwesomeIcon  />
    <FontAwesomeIcon className="love" icon="heart" /> </a></center>
      
    </div>
  );
};

export default Movie;
