import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import NavBar from '../components/NavBar';
import Home from '../components/Home';
import Actors from '../components/Actors';
import Directors from '../components/Directors';
import Movies from '../components/Movies';


const App = (props) => {
  return (
    <Router>
      <div>
      <NavBar/>
      <Route exact to="/" component={Home}/>
      <Route to="Movies" component={Movies} />
      <Route to="Directors" component={Directors}/>
      <Route to="Actors" component={Actors}/>
      </div>
    </Router>
  );
};

export default App
