import React, { Component } from 'react';
import axios from "axios";
import './App.css';
import Header from './components/Header';

class App extends Component {
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
        {/* {
          this.state.contacts.map(rent => {
            return (
              <div key={rent.id} className="App">
                <img src={`http://localhost:1337/${rent.image[0].url}`} alt="name" />
                <p>{rent.title}</p>
                <p>{rent.description}</p>
                <p>{rent.price}</p>
                <p>{rent.address}</p>
                <p>{rent.city}</p>
                <p>{rent.country}</p>
                <p>{rent.bedroom} bedroom/bedrooms | {rent.bathroom} bathroom | {rent.garage}</p>
              </div>
            )
          })
        } */}
      </div>
    );
  }
}

export default App;
