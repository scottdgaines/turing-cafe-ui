import React, { Component } from 'react';
import './App.css';
import Form from '../Form/Form';
import Card from '../Card/Card';

class App extends Component {
  constructor() {
    super();
    this.state = {
      allReservations: []
    };
  };
  
componentDidMount = async () => {
    const response = await fetch('http://localhost:3001/api/v1/reservations');
    const reservations = await response.json();
    
    this.setState({ allReservations: reservations });
  };

  addReservation = (newReservation) => {
    this.setState({ allReservations: [...this.state.allReservations, newReservation] });
  };

  render() {
    const reservationCard = this.state.allReservations.map(res => {
      return (
        <Card 
          id={res.id}
          name={res.name}
          date={res.date}
          time={res.time}
          number={res.number}
          key={res.id}
        />
      );
    });

    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <Form addReservation={this.addReservation} />
        <div className='resy-container'>
          {reservationCard}
        </div>
      </div>
    );
  };
};

export default App;
