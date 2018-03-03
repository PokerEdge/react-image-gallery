import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import './css/index.css';

/* App Components */
import SearchForm from './components/SearchForm';
import Nav from './components/Nav';
import PictureContainer from './components/PictureContainer';
import NoSearchResults from './components/NoSearchResults';

const App = props => {
  return (
    <BrowserRouter>
      <div className="container">
        <Route path="/search" component={SearchForm} />
        <Nav />
        <Switch>
          <Route exact path='/' render={ ()=> <Redirect to={"/search"} /> } />
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
