import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import './css/index.css';

/* App Components */
import SearchForm from './SearchForm';
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
        <Route path="/search" component={SearchForm} />
        <Nav />
        <Switch>
          <Route exact path='/' render={ ()=> <Redirect to={"/search"} /> } />
          <Route path="/search/:searchTerm" component={PictureContainer} />
          <Route path="/batman" component={Batman} />
          <Route path="/coffee" component={Coffee} />
          <Route path="/gym" component={Gym} />
          { /* <Route component={NotFound} /> */ }
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
