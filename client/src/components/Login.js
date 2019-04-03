import React, { Component } from 'react';
import Navbar from './Navbar';

class Login extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <br /><br /><br /><br /><br /><br /><br /><br /><br />
        <section className="section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-5 mx-auto">
              <div className="card padding-card no-radius border t-align-l">
                <div className="card-body">
                  <h5 className="card-title mb-4">Login</h5>
                  <form>
                    <div className="form-group">
                      <label>Email Address <span className="text-danger">*</span></label>
                      <input type="email" className="form-control" placeholder="Enter Email Address" />
                    </div>
                    <div className="form-group">
                      <label>Password <span className="text-danger">*</span></label>
                      <input type="email" className="form-control" placeholder="Enter Password" />
                    </div>
                    <button type="submit" className="btn btn-primary btn-lg btn-block">Login</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
    );
  }
}

export default Login;