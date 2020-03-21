import React from 'react'
import Spinner from '../layout/Spinner.js'
import { connect } from 'react-redux';
import {fetchMovieDetail, setLoading} from '../../actions/SearchActions.js'
import './MoviePage.css'

class Movie extends React.Component {

    componentDidMount() {
        this.props.fetchMovieDetail(this.props.match.params.id)
        this.props.setLoading();
    }

    render() {
        const {movie, loading} = this.props;
        let movieInfo = (
            <div className="container">
                <div className="title">{movie.Title}</div>
                <img src={movie.Poster} alt="No Image" />
                <ul className="details">
                    <li><b>Genre :</b> {movie.Genre}</li>
                    <li><b>Released :</b> {movie.Released}</li>
                    <li><b>Rated :</b> {movie.Rated}</li>
                    <li><b>IMDB Rating :</b> {movie.imdbRating}</li>
                    <li><b>Director :</b> {movie.Director}</li>
                    <li>
                        <b>Writer :</b><br /> 
                        {movie.Writer}
                    </li>
                    <li>
                        <b>Actors :</b><br />
                        {movie.Actors}
                    </li>
                </ul>
                <div className="plot">
                    <h3>About</h3>
                    <p>{movie.Plot}</p>
                    <a 
                        href={'https://www.imdb.com/title/' + movie.imdbID}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="imdb-link"
                    >
                    View on <b>IMDB</b>
                    </a>
                </div>
            </div>
        );

        return (
            <div>
                {loading ? <Spinner /> : movieInfo}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    loading: state.data.loading,
    movie: state.data.movie
});

export default connect(mapStateToProps, {fetchMovieDetail, setLoading})(Movie);