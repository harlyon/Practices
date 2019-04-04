import React, { Component } from 'react';
import axios from 'axios';
import Navbar from './Navbar';

class SingleProperties extends Component {
  // state = {
  //   property:{},
  // }
  constructor(props) {
    super(props);
    this.state = {
       property: {}
     }
  }



  componentWillMount() {
    const rentid = this.props.match.params.rentid
    axios.get(`http://localhost:1337/Rents?id=${rentid}`)
      .then(res => {
        this.setState({ property: res.data })
        console.log(res.data);
    })
  }

  render() {
    const { property } = this.state
    console.log("data",property)
    return (
      <div>
        <Navbar />
         <section className="section-padding bg-dark inner-header">
         <div className="container">
            <div className="row">
               <div className="col-md-12 text-center">
                  <h1 className="mt-0 mb-3">Featured Listing</h1>
                  <div className="breadcrumbs">
                     <p className="mb-0"><a href="/"><i className="mdi mdi-home-outline"></i> Home</a> / Featured Listing</p>
                  </div>
               </div>
            </div>
         </div>
      </section>
        <section className="section-padding">
        <div className="container">
          <div className="row">
              <div className="col-lg-12 col-md-12">
              <div className="card bg-dark text-white card-overlay">
                <a href="/">
                  <img className="card-img" src={`http://localhost:1337/${property.image}` > 0 ? `http://localhost:1337/${property[0].image[0]}` : ''} alt="Card" />
                </a>
                </div>
                  <section className="samar-slider">
                  <div className="property-single-title property-single-title-gallery">
                    <div className="container">
                      <div className="row">
                        <div className="col-lg-8 col-md-8">
                          <h1>{property.length > 0 ? property[0].title : ''}</h1>
                          <h6><i className="mdi mdi-home-map-marker" />{property.length > 0 ? property[0].address : ''}</h6>
                        </div>
                        <div className="col-lg-4 col-md-4 text-right">
                          <h6 className="mt-2">{property.length > 0 ? property[0].type : ''}</h6>
                          <h2 className="text-primary">{property.length > 0 ? property[0].price : ''} <small>/month</small></h2>
                        </div>
                      </div>
                      <hr />
                    </div>
                  </div>
                  </section>
              <div className="card padding-card property-single-slider">
                <div className="card-body">
                  <h5 className="card-title mb-3">Description</h5>
                  <div className="row">
                    <div className="col-lg-4 col-md-4">
                    <div className="list-icon">
                        <i className="mdi mdi-car-convertible" />
                        <strong>Garage:</strong>
                        <p className="mb-0">{property.length > 0 ? property[0].garage : ''} Garage/Garages</p>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4">
                      <div className="list-icon">
                        <i className="mdi mdi-sofa" />
                        <strong>Beds:</strong>
                        <p className="mb-0">{property.length > 0 ? property[0].garage : ''} Bedroom/Bedrooms</p>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4">
                      <div className="list-icon">
                        <i className="mdi mdi-hot-tub" />
                        <strong>Baths:</strong>
                        <p className="mb-0">{property.length > 0 ? property[0].bathroom : ''} Bathroom/Bathrooms</p>
                      </div>
                    </div>
                  </div>
                    <p>{property.length > 0 ? property[0].description : ''}. </p>
                    <div className="row mb-3">
                    <div className="col-lg-6 col-md-6">
                        <p><strong className="text-dark">City :</strong> {property.length > 0 ? property[0].city : ''}</p>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <p><strong className="text-dark">Country :</strong>{property.length > 0 ? property[0].country : ''}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div></div></div></section>
       </div>
    );
  }
}

export default SingleProperties;