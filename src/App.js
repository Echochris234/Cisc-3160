import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
  HashRouter
} from 'react-router-dom';

import AboutUsPage from './pages/AboutUsPage';
import Assignments from './pages/Assignments';
import HomePage from './pages/HomePage';

import './App.css';


function Navigation(props) {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark shadow mb-3">
      <Link className="navbar-brand" to="personal-page/home">Christian's Site</Link>
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <NavLink className="nav-link" exact to="/home">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" exact to="/about-us">
            About
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" exact to="/assignments">
            Assignments
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}


class App extends React.Component {
  render() {
    return (
      
      // <Router>
      <HashRouter basename="/">
        <Navigation />
        <div className="container-fluid text-center">
          <div className="row justify-content-center">
            
            <Switch>
              <Route path="personal-page/about-us" component={AboutUsPage} />
              <Route path="personal-page/assignments" component={Assignments} />
              <Route path="personal-page/home" component={HomePage} />
            </Switch>
          </div>
        </div>
      </HashRouter>
      // </Router>
    );
  }
}


export default App;
