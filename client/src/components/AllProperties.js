import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import Header from './Header';

class AllProperties extends Component {
  state = {
    properties: []
  }

  componentDidMount() {
    this.getProperties();
  }


  getProperties = () => {
    axios.get('http://localhost:1337/Rents')
      .then(res => {
        this.setState({ properties: res.data });
        console.log(res.data);
    })
  }
  render() {
    return (
      <div>
        <Header />
        <section className="section-padding">
       <div className="section-title text-center mb-5">
            <h2>All Properties</h2>
            <div className="line mb-2"></div>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
         </div>
        <div className="container">
            <div className="row">
             {
          this.state.properties.map((rent, item) => {
            return (
              <div key={item} className="col-md-4 col-lg-4">
                <div className="card card-list">
                    <div className="card-img">
                      <div className="badge images-badge"><i className="mdi mdi-image-filter" />{rent.type}</div>
                      <span className="badge badge-primary"></span>
                     <Link to={`/rent/${rent.id}`}><img className="card-img-top"  src={`http://localhost:1337/${rent.image[0].url}`} alt="Card cap" /></Link>
                    </div>
                    <div className="card-body">
                      <h2 className="text-primary mb-2 mt-0">
                      {rent.price} <small>/month</small>
                      </h2>
                      <h5 className="card-title mb-2">{rent.title}</h5>
                      <h6 className="card-subtitle mt-1 mb-0 text-muted"><i className="mdi mdi-home-map-marker" />{rent.address}</h6>
                    </div>
                    <div className="card-footer">
                      <span><i className="mdi mdi-sofa" /> Beds : <strong>{rent.bedroom}</strong></span>
                      <span><i className="mdi mdi-scale-bathroom" /> Baths : <strong>{rent.bathroom}</strong></span>
                      <span><i className="mdi mdi-move-resize-variant" /> Garage : <strong>{rent.garage}</strong></span>
                    </div>
                </div>
              </div>
            )
          })
        }
           </div>
          </div>
          </section>
      </div>
    );
  }
}

export default AllProperties;