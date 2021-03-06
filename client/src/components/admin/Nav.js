import React, { Component } from 'react';
import fire from  '../../config/fire';

class Nav extends Component {

  logOut = () => {
    fire.auth().signOut();
  }
  render() {
    return (
      <div>
        <header>
        <div className="position-relative">
          <nav className="navbar navbar-expand-lg navbar-light bg-danger pr-3 pl-3">
            <div className="container">
            <a className="navbar-brand text-success logo" href="index.html">
              <img style={{width: "100px", height: "50px"}} src="https://www.seoclerk.com/pics/492901-1o2aYU1479493606.png" alt="samar logo" />
            </a>
            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav mr-auto mt-2 mt-lg-0 margin-auto">
                <li className="nav-item">
                  <a className="nav-link" href="/property">
                    ADD PROPERTY
                  </a>
                  </li>
                  <li className="nav-item">
                  <a className="nav-link" href="/properties">
                    ALL PROPERTIES
                  </a>
                </li>
              </ul>
              <div className="my-2 my-lg-0">
                <ul className="list-inline main-nav-right">
                  <li className="list-inline-item">
                    <a className="btn btn btn-outline-primary btn-sm" onClick={this.logOut} href="/login"><i className="mdi mdi-account-outline" /> Log Out</a>
                  </li>
                </ul>
              </div>
            </div>
            </div>
          </nav>
        </div>
      </header>
    </div>
    );
  }
}

export default Nav;