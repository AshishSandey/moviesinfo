import React from 'react'
import './SearchForm.css'
import { connect } from 'react-redux';
import {searchMovie, fetchMovie, setLoading} from '../../actions/SearchActions.js'

class SearchForm extends React.Component {
    constructor() {
        super();
        this.onChange=this.onChange.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
    }

    onChange(event) {
        this.props.searchMovie(event.target.value);
    }

    onSubmit(event) {
        event.preventDefault();
        this.props.fetchMovie(this.props.text);
        this.props.setLoading();
    }

    render() {
        return (
            <div className="search-container">
                <div className="description">
                    Search for movies, TV series ...
                </div>
                <form id="search-form" onSubmit={this.onSubmit}>
                    <input 
                        type="text"
                        className="search-box"
                        placeholder="Search for movies, TV series .."
                        onChange={this.onChange}
                    />
                    <button type="submit" className="search-button">
                        Search
                    </button>
                </form>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        text: state.data.text
    }
}

export default connect(mapStateToProps, {searchMovie, fetchMovie, setLoading})(SearchForm)
