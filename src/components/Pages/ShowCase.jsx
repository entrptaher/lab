import React from 'react';
import { Link, NavLink } from 'react-router-dom';
const Nav = props => (<NavLink {...props} activeClassName="active" />);

const App = () => (
  <div>
    <div><h1 className="display-4 text-center">Rabbit Showcase</h1><hr /></div>
    <div className="row">
      <div className="col-md-4">
        <div className="card">
          <div className="card-header">AutoRegex</div>
          <div className="card-body">
            <h4 className="card-title">Generate Regex Automatically!</h4>
            <p className="card-text">Provide a sample text and get a very basic and sample regex pattern.</p>
            <Nav to="/lab/autoregex" className="card-link">Check it Out!</Nav>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default App;
