import React from 'react';
import {Link} from 'react-router-dom'
import './MovieCard.css'

class MovieCard extends React.Component {
    render() {
        const {movie} = this.props;

        return (
            <div className="moviecard-container">
                    {movie.Poster==="N/A" ? "NO Image" : <img className="poster" src={movie.Poster} alt="No Image" />}
                <div className="movie-title">
                    {movie.Title} ({movie.Year})
                </div>
                <Link className="details" to={'/movie/' + movie.imdbID}>
                    Movie Detail
                </Link>
            </div>
        )
    }
}

export default MovieCard;