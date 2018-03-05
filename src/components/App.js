import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import '../css/index.css';

/* App Components */
import SearchForm from './SearchForm';
import Nav from './Nav';
import PictureContainer from './PictureContainer';
import NoSearchResults from './NoSearchResults';

const App = props => {
  return (
    <BrowserRouter>
      <div className="container">
        <Route exact path="/search" component={SearchForm} />
        <Nav />
        <Switch>
          <Route exact path="/" render={ ()=> <Redirect to={"/search"} /> } />
          <Route exact path="/search" component={undefined} />
          <Route path="/search/:searchTerm" component={PictureContainer} />
          <Route path="/batman" render={ ()=> <Redirect to={"/batman"} /> } />
          <Route path="/coffee" render={ ()=> <Redirect to={"/coffee"} /> } />
          <Route path="/gym" render={ ()=> <Redirect to={"/gym"} /> } />
          <Route component={NoSearchResults} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
