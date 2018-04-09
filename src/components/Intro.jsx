import React from 'react';
import { Link, NavLink } from 'react-router-dom';
const Nav = props => (<NavLink {...props} activeClassName="active" />);

const App = () => (
  <div className='App'>
    <div className="jumbotron">
      <h1 className="display-3">Welcome to TahyLabs!</h1>
      <p className="lead">See small things in different perspective. This is a showcase site for to show that you can build something very basic yet fun out of simple packages.</p>
      <Nav to="/lab" className="btn btn-primary btn-lg">Check the Lab</Nav>
    </div>
    <h3 className="text-center pb-4">Methodologies</h3>
    <div className="row">
      <div className="col-md-4">
        <div className="card">
          <div className="card-header">Be Creative</div>
          <div className="card-body">
            <h4 className="card-title">Think differently.</h4>
            <p className="card-text">Half of the glass is empty, but half of the glass is also full, right? That's how you can think positively and differently without banging your head on wall.</p>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card">
          <div className="card-header">DRY (Don't Repeat Yourself)</div>
          <div className="card-body">
            <h4 className="card-title">Don't reinvent the wheel!</h4>
            <p className="card-text">Why create the wheel if all you can just take others wheels and build your own car instead? Practising DRY will be fun once you start to know how it feels like!</p>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card">
          <div className="card-header">KISS (Keep It Simple Stupid)</div>
          <div className="card-body">
            <h4 className="card-title">Don't make it complex.</h4>
            <p className="card-text">Adding lots of features without need will only clutter the view and ruin the mood, not to mention it's a waste of time and energy.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default App;
