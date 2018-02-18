import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';
import './css/index.css';

/* App Components */
import Search from './Search';
import Nav from './Nav';
import NotFound from './NotFound';
import PictureContainer from './PictureContainer';

/* Image holding components (to genearlize in the Container component) */
import Batman from './components/Batman';
import Coffee from './components/Coffee';
import Gym from './components/Gym';

const App = props => {
  return (
    <BrowserRouter>
      <div className="container">
        <Nav />
        <Switch>
          <Route exact path="/" component={PictureContainer} />
          <Route path="/search" component={Search} />
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
