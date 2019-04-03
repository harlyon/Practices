import React, { Component } from 'react';
import axios from "axios";
import Header from './Header';

class Main extends Component {
  state = {
    contacts: []
  }

  componentDidMount() {
    this.getContacts();
  }


  getContacts = () => {
    axios.get('http://localhost:1337/Rents')
      .then(res => {
        this.setState({ contacts: res.data });
        console.log(res.data);
    })
  }
  render() {
    return (
      <div>
        <Header />
        <section class="section-padding">
        <div className="section-title text-center mb-5">
          <h2>Property By City</h2>
          <div className="line mb-2" />
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-8">
              <div className="card bg-dark text-white card-overlay">
                <a href="/">
                  <img className="card-img" src="http://giftechies.com/samar-real-estate/theme/img/overlay/1.png" alt="Card" />
                  <div className="card-img-overlay">
                    <h3 className="card-title text-white">Johannesburg</h3>
                    <p className="card-text text-white">16 Properties</p>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-4">
              <div className="card bg-dark text-white card-overlay">
                <a href="/">
                  <img className="card-img" src="http://giftechies.com/samar-real-estate/theme/img/overlay/2.png" alt="Card" />
                  <div className="card-img-overlay">
                    <h3 className="card-title text-white">Mpumalanga</h3>
                    <p className="card-text text-white">265 Properties</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-4">
              <div className="card bg-dark text-white card-overlay">
                <a href="/">
                  <img className="card-img" src="http://giftechies.com/samar-real-estate/theme/img/overlay/3.png" alt="Card" />
                  <div className="card-img-overlay">
                    <h3 className="card-title text-white">Pretoria</h3>
                    <p className="card-text text-white">620 Properties</p>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-lg-8 col-md-8">
              <div className="card bg-dark text-white card-overlay">
                <a href="/">
                  <img className="card-img" src="http://giftechies.com/samar-real-estate/theme/img/overlay/4.png" alt="Card" />
                  <div className="card-img-overlay">
                    <h3 className="card-title text-white">Cape Town</h3>
                    <p className="card-text text-white">28 Properties</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
         {/* <div class="section-title text-center mb-5">
            <h2>Latest Properties</h2>
            <div class="line mb-2"></div>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
         </div>
        <div className="container">
            <div className="row"> */}

            {/* {
          this.state.contacts.map(rent => {
            return (
              <div key={rent.id} className="col-md-4 col-lg-4">
                <div className="card card-list">
                  <a href="/">
                    <div className="card-img">
                      <div className="badge images-badge"><i className="mdi mdi-image-filter" />{rent.type}</div>
                      <span className="badge badge-primary"></span>
                      <img className="card-img-top"  src={`http://localhost:1337/${rent.image[0].url}`} alt="Card cap" />
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
                  </a>
                </div>
              </div>
            )
          })
        } */}
          {/* </div>
          </div> */}
          </section>
      </div>
    );
  }
}

export default Main;