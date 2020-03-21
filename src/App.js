import React from 'react';
import {Provider} from 'react-redux'
import store from './store'
import {HashRouter as Router, Route} from 'react-router-dom'

import Header from './components/layout/Header.js';
import Navbar from './components/layout/Navbar.js';
import Footer from './components/layout/Footer.js';
import HomePage from './components/home/HomePage.js';
import MoviePage from './components/home/MoviePage.js';

import './App.css'

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Header />
            <Navbar />
            <Route exact path="/" component={HomePage} />
            <Route exact path="/movie/:id" component={MoviePage} />
            <Footer />
          </div>
        </Router>
      </Provider>
    )
  }
}


export default App;
