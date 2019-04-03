import React, { Component } from 'react';

class input extends Component {
  render() {
    return (
      <div>
         <div className="slider-form container">
    {/* //   <header className="masthead text-white text-center">
    //   <div className="overlay" />
    //   <div className="container">
    //     <div className="row">
    //       <div className="col-xl-9 mx-auto">
    //         <h1 className="mb-5">Find Your Dream Home</h1>
    //       </div>
    //       <div className="col-md-10 col-lg-8 col-xl-7 mx-auto">
    //         <form>
    //           <div className="form-row">
    //             <div className="col-12 col-md-9 mb-2 mb-md-0">
    //               <input type="email" className="form-control form-control-lg" placeholder="Enter your email..." />
    //             </div>
    //             <div className="col-12 col-md-3">
    //               <button type="submit" className="btn btn-block btn-lg btn-primary">Sign up!</button>
    //             </div>
    //           </div>
    //         </form>
    //       </div>
    //     </div>
    //   </div>
    // </header> */}
    <form >
    <div className="tab-content">
      <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
        <div className="row no-gutters">
          <div className="col-sm-4">
            <div className="input-group">
              <div className="input-group-addon"><i className="mdi mdi-map-marker-multiple" /></div>
              <input className="form-control" placeholder="Enter Location or Landmark" type="text" />
            </div>
          </div>
          <div className="col-sm-3">
            <div className="input-group">
              <div className="input-group-addon"><i className="mdi mdi-google-maps" /></div>
              <select className="form-control select2 no-radius">
                <option value>Locations</option>
                <option value="AL">Alabama</option>
                <option value="AK">Alaska</option>
                <option value="AZ">Arizona</option>
                <option value="AR">Arkansas</option>
                <option value="CA">California</option>
                <option value="CO">Colorado</option>
                <option value="CT">Connecticut</option>
                <option value="DE">Delaware</option>
                <option value="DC">District Of Columbia</option>
                <option value="FL">Florida</option>
                <option value="GA">Georgia</option>
                <option value="HI">Hawaii</option>
                <option value="ID">Idaho</option>
                <option value="IL">Illinois</option>
                <option value="IN">Indiana</option>
                <option value="IA">Iowa</option>
                <option value="KS">Kansas</option>
                <option value="KY">Kentucky</option>
                <option value="LA">Louisiana</option>
                <option value="ME">Maine</option>
                <option value="MD">Maryland</option>
                <option value="MA">Massachusetts</option>
                <option value="MI">Michigan</option>
                <option value="MN">Minnesota</option>
                <option value="MS">Mississippi</option>
                <option value="MO">Missouri</option>
                <option value="MT">Montana</option>
                <option value="NE">Nebraska</option>
                <option value="NV">Nevada</option>
                <option value="NH">New Hampshire</option>
                <option value="NJ">New Jersey</option>
                <option value="NM">New Mexico</option>
                <option value="NY">New York</option>
                <option value="NC">North Carolina</option>
                <option value="ND">North Dakota</option>
                <option value="OH">Ohio</option>
                <option value="OK">Oklahoma</option>
                <option value="OR">Oregon</option>
                <option value="PA">Pennsylvania</option>
                <option value="RI">Rhode Island</option>
                <option value="SC">South Carolina</option>
                <option value="SD">South Dakota</option>
                <option value="TN">Tennessee</option>
                <option value="TX">Texas</option>
                <option value="UT">Utah</option>
                <option value="VT">Vermont</option>
                <option value="VA">Virginia</option>
                <option value="WA">Washington</option>
                <option value="WV">West Virginia</option>
                <option value="WI">Wisconsin</option>
                <option value="WY">Wyoming</option>
              </select>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="input-group">
              <div className="input-group-addon"><i className="mdi mdi-security-home" /></div>
              <select className="form-control select2 no-radius">
                <option value>Property Type</option>
                <option value>House/Villa</option>
                <option value>Flat</option>
                <option value>Plot/Land</option>
                <option value>Office Space</option>
                <option value>Shop/Showroom</option>
                <option value>Commercial Land</option>
                <option value>Warehouse/ Godown</option>
                <option value>Industrial Building</option>
              </select>
            </div>
          </div>
          <div className="col-sm-2">
            <button type="submit" className="btn btn-secondary btn-block no-radius font-weight-bold">SEARCH</button>
          </div>
        </div>
      </div>
      <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
        <div className="row no-gutters">
          <div className="col-sm-7">
            <div className="input-group">
              <div className="input-group-addon"><i className="mdi mdi-map-marker-multiple" /></div>
              <input className="form-control" placeholder="Enter Location or Landmark" type="text" />
            </div>
          </div>
          <div className="col-sm-3">
            <div className="input-group">
              <div className="input-group-addon"><i className="mdi mdi-security-home" /></div>
              <select className="form-control select2 no-radius">
                <option value>Property Type</option>
                <option value>House/Villa</option>
                <option value>Flat</option>
                <option value>Plot/Land</option>
                <option value>Office Space</option>
                <option value>Shop/Showroom</option>
                <option value>Commercial Land</option>
                <option value>Warehouse/ Godown</option>
                <option value>Industrial Building</option>
              </select>
            </div>
          </div>
          <div className="col-md-2">
            <button type="submit" className="btn btn-secondary btn-block no-radius font-weight-bold">SEARCH</button>
          </div>
        </div>
      </div>
    </div>
        </form>
        </div>
      </div>
    );
  }
}

export default input;