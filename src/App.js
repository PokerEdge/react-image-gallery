import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';
import './css/index.css';

/* App Components */
import SearchForm from './SearchForm';
import SearchResults from './SearchResults';
import Nav from './Nav';
import NotFound from './NotFound';

/* Image holding components (to genearlize in the Container component) */
import PictureContainer from './PictureContainer';
import Batman from './components/Batman';
import Coffee from './components/Coffee';
import Gym from './components/Gym';

const App = props => {
  return (
    <BrowserRouter>
      <div className="container">
        <Nav />
        <Route path="/search" component={SearchForm} />
        <Switch>
          <Route exact path="/" component={PictureContainer} />
          <Route path="/search/:searchTerm" component={SearchResults} />
          <Route path="/batman" component={Batman} />
          <Route path="/coffee" component={Coffee} />
          <Route path="/gym" component={Gym} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
