import React, { Component } from 'react';
import firebase from 'firebase';
import { Link } from 'react-router-dom';
import Header from './Header';

class AllProperties extends Component {
  state = {
      items: []
  }

  componentDidMount() {
    this.getProperties();
  }


  getProperties = () => {
    let itemsRef = firebase.database().ref('properties');
    itemsRef.on('value', snapshot => {
      let items = snapshot.val();
      let properties = [];
      for (let item in items) {
        properties.push({
          id: item,
          address: items[item].address,
          title: items[item].title,
          description: items[item].description,
          country: items[item].country,
          image: items[item].image,
          city: items[item].city,
          type: items[item].type,
          price: items[item].price,
          bedroom: items[item].bedroom,
          bathroom: items[item].bathroom,
          garages: items[item].garages
        })
      }
      this.setState({ items: properties})
      console.log(snapshot.val());
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
                this.state.items.map((item, id) => {
                      return (
                        <div  className="col-md-4 col-lg-4" key={id}>
                        <div className="card card-list">
                            <div className="card-img">
                              <div className="badge images-badge"><i className="mdi mdi-image-filter" /></div>
                              <span className="badge badge-primary">{item.type}</span>
                             <img className="card-img-top"  src={item.image.avatarURL} alt="Card cap" />
                            </div>
                            <div className="card-body">
                              <h2 className="text-primary mb-2 mt-0">
                              {item.price} <small>/month</small>
                              </h2>
                              <h5 className="card-title mb-2">{item.title}</h5>
                              <h6 className="card-subtitle mt-1 mb-0 text-muted"><i className="mdi mdi-home-map-marker" />{item.address}</h6>
                            </div>
                            <div className="card-footer">
                              <span><i className="mdi mdi-sofa" /> Beds : <strong>{item.bedroom}</strong></span>
                              <span><i className="mdi mdi-scale-bathroom" /> Baths : <strong>{item.bathroom}</strong></span>
                              <span><i className="mdi mdi-move-resize-variant" /> Garage : <strong>{item.garage}</strong></span>
                            </div>
                        </div>
                      </div>
                      )
                    }) }
                </div>
                </div>
          </section>
      </div>
    );
  }
}

export default AllProperties;