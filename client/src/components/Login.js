import React, { Component } from 'react';
import Navbar from './Navbar';
import fire from '../config/fire';
import { Redirect } from "react-router-dom";

class Login extends Component {
  state = {
    email: '',
    password: '',
    redirect: false
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(e.target.value)
  }

  submitForm = e => {
    e.preventDefault();
    fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
      .then((u) => {
        this.setState({redirect: true})
      })
      .catch((error) => {
        console.log(error);
      })
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to={"./property"} />;
    }
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
                    </div>
                    <div className="form-group">
                      <label>Password <span className="text-danger">*</span></label>
                        <input type="password"
                             name="password"
                             value={this.state.password}
                             onChange={this.handleChange}
                             className="form-control"
                             placeholder="Enter Password" />
                    </div>
                    <button type="submit" className="btn btn-primary btn-lg btn-block" value="Submit">Login</button>
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