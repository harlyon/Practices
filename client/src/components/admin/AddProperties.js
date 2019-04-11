import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import fire from '../../config/fire';
import Nav from './Nav';
import Login from '../Login';

class AddProperties extends Component {
  state = {
    user: {}
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }
    })
  }

  render() {
    return (
      <div>
        <Nav />
        <br /><br /><br /><br />
        {
        this.state.user ?
            (
        <section className="section-padding">
        <div className="col-lg-12 col-md-12">
            <form>
            <div className="col-lg-5 col-md-5 mx-auto">
          <div className="card padding-card  no-radius border">
            <div className="card-body">
              <h5 className="card-title mb-4">Property Description</h5>
              <div className="form-group">
                <label>Property Title <span className="text-danger">*</span></label>
                <input type="text" className="form-control" placeholder="Enter Title" />
              </div>
              <div className="form-group">
                <label>Property Description <span className="text-danger">*</span></label>
                <textarea className="form-control" rows={4} defaultValue={""} />
              </div>
              <div className="row">
                <div className="form-group col-md-4">
                  <label>Address <span className="text-danger">*</span></label>
                  <input type="text" className="form-control" placeholder="Enter Bedrooms" />
                </div>
                <div className="form-group col-md-4">
                  <label>City <span className="text-danger">*</span></label>
                  <input type="text" className="form-control" placeholder="Enter Bathrooms" />
                </div>
                <div className="form-group col-md-4">
                  <label>Country <span className="text-danger">*</span></label>
                  <input type="text" className="form-control" placeholder="Enter Floors" />
                </div>
              </div>
              <div className="row">
                <div className="form-group col-md-4">
                  <label>Garages <span className="text-danger">*</span></label>
                  <input type="text" className="form-control" placeholder="Enter Garages" />
                </div>
                <div className="form-group col-md-4">
                  <label>Bedroom <span className="text-danger">*</span></label>
                  <input type="text" className="form-control" placeholder="sq ft" />
                </div>
                <div className="form-group col-md-4">
                  <label>Bathroom <span className="text-danger">*</span></label>
                  <input type="text" className="form-control" placeholder="sq ft" />
                </div>
              </div>
              <div className="row">
                <div className="form-group col-md-4">
                  <label>Price<span className="text-danger">*</span></label>
                  <input type="text" className="form-control" placeholder="Enter Price Label" />
                </div>
                <div className="form-group col-md-4">
                  <label>Type - sale or rent<span className="text-danger">*</span></label>
                  <input type="text" className="form-control" placeholder="Enter Price Label" />
                </div>
              </div>
                  <div className="col-md-12">
                    <div className="fuzone">
                      <div className="fu-text">
                          <span><i className="mdi mdi-image-area"></i> Click here or drop files to upload</span>
                      </div>
                      <input className="upload" type="file" />
                    </div>
                </div>
              </div>
                </div>
                </div>
            </form>
          </div>
          </section>
          ) : (
        <Login />
        )}
      </div>
      // <div>
      //   <Nav />
      //   <br /><br /><br /><br /><br />
    );
  }
}

export default AddProperties;