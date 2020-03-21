import React from 'react'
import {connect} from 'react-redux'
import MovieCard from './MovieCard'
import './MoviesContainer.css'

class MoviesContainer extends React.Component {
    render() {
        const {movies} = this.props;
        const content = (movies.Response === "True")? 
                            movies.Search.map((movie, index) => <MovieCard key={index} movie={movie} />) : null;
        
        return (
            <div className="main-container">
                {content}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    movies: state.data.movies
});

export default connect(mapStateToProps)(MoviesContainer)