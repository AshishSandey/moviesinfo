import {SEARCH_MOVIE, FETCH_MOVIE, FETCH_MOVIE_DETAIL, LOADING} from './types.js'
import {APIKey} from '../components/APIKey'

export const searchMovie = text => dispatch => {
    dispatch({
        type: SEARCH_MOVIE,
        payload: text
    })
}

export const fetchMovie = text => dispatch => {
    fetch(`https://www.omdbapi.com/?apikey=${APIKey}&s=${text}`)
    .then(res => res.json())
    .then(response => 
            dispatch({
                type: FETCH_MOVIE,
                payload: response
            }),
        err => console.log(err)
        )
}

export const fetchMovieDetail = id => dispatch => {
    fetch(`https://www.omdbapi.com/?apikey=${APIKey}&i=${id}`)
    .then(res => res.json())
    .then(response => 
            dispatch({
                type:FETCH_MOVIE_DETAIL,
                payload: response
            }),
            err => console.log(err)
        )
}

export const setLoading = () => {
    return {
        type: LOADING
    }
};