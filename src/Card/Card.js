import React from 'react';
import './Card.css';

function Card({ name, date, time, number }) {
  return (
    <div className="reservation-card">
        <h2>{name}</h2>
        <p>{date}</p>
        <p>{time}</p>
        <p>Number of guests: {number}</p>
    </div>
  )
}

export default Card
