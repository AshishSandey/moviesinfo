import React from 'react'
import SearchForm from './SearchForm.js'
import MoviesContainer from './MoviesContainer.js'
import Spinner from '../layout/Spinner.js'
import { connect } from 'react-redux'

class HomePage extends React.Component {
    render() { 
        return (
            <div>
                <SearchForm />
                {this.props.loading? <Spinner /> : <MoviesContainer />}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        loading: state.data.loading
    }
}

export default connect(mapStateToProps)(HomePage);