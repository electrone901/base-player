import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import logo from '../../img/l3.png';

import { logoutUser } from '../../actions/authActions';

class Navbar extends Component {

  // To logout implement in the future
  onLogoutClick(e){
      e.preventDefault();
      this.props.logoutUser();
  }
  
  render() {
    const {isAuthenticated, user} = this.props.auth;
    
    const authLinks = (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link to="/profile" className="nav-link">
              Welcome, {user.name}
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/" onClick={this.onLogoutClick.bind(this)} className="nav-link">
              Logout
          </Link>
        </li>
      </ul>
    );

    
    const guestLinks = (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/team">
            Choose Team
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/players">
          Choose Players
          </Link>
        </li>
      </ul>
    );

    return (
      <nav className="navbar navbar-expand-sm navbar-light btn-light">
        <div className="container">
          <Link className="navbar-brand logo" to="/">
            Baseball Player
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#mobile-nav"
          >
            <span className="navbar-toggler-icon"/>
          </button>

          <div className="collapse navbar-collapse" id="mobile-nav"> 
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                </li>

              {/* <li className="nav-item">
                <Link className="nav-link" to="/categories">
                  {' '}
                  How it works
                </Link>
              </li> */}
            </ul>
            {isAuthenticated ? authLinks : guestLinks}
          </div>
          
        </div>
      </nav>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps, {logoutUser})(Navbar);

