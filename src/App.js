import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from 'react-router-dom';

import AboutUsPage from './pages/AboutUsPage';
import Assignments from './pages/Assignments';
import HomePage from './pages/HomePage';

import './App.css';


function Navigation(props) {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark shadow mb-3">
      <Link className="navbar-brand" to="/">Christian's Site</Link>
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <NavLink className="nav-link" exact to="/personal-page">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" exact to="personal-page/about-us">
            About
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" exact to="personal-page/assignments">
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
      
      <Router>
        <Navigation />
        <div className="container-fluid text-center">
          <div className="row justify-content-center">
            
            <Switch>
              <Route path="personal-page/about-us" component={AboutUsPage} />
              <Route path="personal-page/assignments" component={Assignments} />
              <Route path="personal-page/personal-page" component={HomePage} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}


export default App;
