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
import DisplayImage from './pages/DisplayImage';

import './App.css';


function Navigation(props) {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark shadow mb-3">
      <Link className="navbar-brand" to="/">3160 Labs</Link>
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <NavLink className="nav-link" exact to="/">
            Display Image
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" exact to="/about-us">
            About Us
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}


class App extends React.Component {
  render() {
    return (
      <HashRouter basename={process.env.PUBLIC_URL+'/'}>
          <Navigation />
          <div className="container-fluid text-center">
            <div className="row justify-content-center">
              <Switch>
              <Route path="/" component={DisplayImage} />
                
              <Route path="/about-us" component={AboutUsPage} />
                
              </Switch>
            </div>
          </div>
      </HashRouter>
    );
  }
}


export default App;
