import React from 'react';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AboutView from './components/AboutView';
import SearchView from './components/SearchView';
import MovieView from './components/MovieView';
import PageNotFound from './components/PageNotFound';
import { Switch, Route } from 'react-router-dom';


function App() {

  const [searchResults, setSearchResults] = useState([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    if(searchText) {
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=5a65bad7d8cb8b060220d08d2f83b7f7&language=en-US&query=${searchText}&page=1&include_adult=false`)
      .then(response => response.json())
      .then(data => {
        setSearchResults(data.results)
      })
    }
  }, [searchText]) 


  return (
    <div>
      <Navbar searchText={searchText} setSearchText={setSearchText} />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={AboutView} />
          <Route path="/search">
            <SearchView keyword={searchText} searchResults={searchResults} component={SearchView} />
          </Route>
          <Route path="/movies/:id" component={MovieView} />
          <Route path="*" component={PageNotFound} />
        </Switch>
    </div>
  );
};

export default App;
