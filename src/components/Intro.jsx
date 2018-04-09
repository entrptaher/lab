import React from 'react';
import { Link, NavLink } from 'react-router-dom';
const Nav = props => (<NavLink {...props} activeClassName="active" />);

const App = () => (
  <div className='App'>
    <div className="jumbotron">
      <h1 className="display-3">Welcome to TahyLabs!</h1>
      <p className="lead">See small things in different perspective. This is a showcase site for to show that you can build something very basic yet fun out of simple packages.</p>
      <Nav to="/lab" className="btn btn-primary btn-lg">Check the Lab</Nav>
      <hr className="my-4" />
    </div>
  </div>
);

export default App;
