import React, { Component } from 'react';

class SideBar extends Component {
  render() {
    return (
      <div>
        <div className="section-padding">
        <div className="container">
            <div className="row">
            <nav class="nav user-side-bar">
              <a class="nav-link disabled" href="/">Add Property</a>
              <a class="nav-link disabled" href="/">Delete Property</a>
              <a class="nav-link disabled" href="/">Edit Property</a>
              <a class="nav-link disabled" href="/">All Property</a>
            </nav>
            {/* <div className="col-lg-2 col-md-4 user-side-bar">
              <div className="">
                <a className="list-group-item list-group-item-action" href="user-profile.html"><span className="mdi mdi-account" /> User Profile</a>
                <a className="list-group-item list-group-item-action" href="social-profiles.html"><span className="mdi mdi-share-variant" /> Social Profiles</a>
                <a className="list-group-item list-group-item-action" href="my-properties.html"><span className="mdi mdi-home-account" /> My Properties</a>
                <a className="list-group-item list-group-item-action" href="favorite-properties.html"><span className="mdi mdi-heart" /> Favorite Properties</a>
                <a className="list-group-item list-group-item-action active" href="add-property.html"><span className="mdi mdi-account-location" /> Add Property</a>
              </div>
            </div> */}
          </div>
          </div>
          </div>
      </div>
    );
  }
}

export default SideBar;