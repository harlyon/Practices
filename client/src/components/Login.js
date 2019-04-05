import React, { Component } from 'react';
import Navbar from './Navbar';

class Login extends Component {
  state = {
    email: '',
    password: ''
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(e.target.value)
  }

  submitForm = e => {
    e.preventDefault();
    e.target.name += " was-validated";
  }

  validate = () => {

  }

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
                  <form  onSubmit={this.submitForm}>
                    <div className="form-group">
                      <label>Email Address <span className="text-danger">*</span></label>
                        <input type="text"
                            name="email"
                            value={this.state.email}
                            onChange={this.handleChange}
                            className="form-control"
                            placeholder="Enter Email Address" />
                        {/* <div className="errorMsg">{this.state.errors.emailid}</div> */}
                    </div>
                    <div className="form-group">
                      <label>Password <span className="text-danger">*</span></label>
                        <input type="password"
                             name="password"
                             value={this.state.password}
                             onChange={this.handleChange}
                             className="form-control"
                             placeholder="Enter Password" />
                        {/* <div className="errorMsg">{this.state.errors.password}</div> */}
                    </div>
                    <button type="submit" className="btn btn-primary btn-lg btn-block" value="SUbmit">Login</button>
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