import React, { Component } from 'react';
import './Form.css'

class Form extends Component {
    constructor() {
        super();
        this.state = {
            id: Date.now(),
            name: '',
            date: '',
            time: '',
            number: ''
        }
    }

    handleChange(event ) {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleClick(event) {
        event.preventDefault()

        this.props.addReservation(this.state)
    }

    render() {
        return (
            <form className='resy-form'>
                <input 
                    name='name' 
                    type="text" 
                    value={this.state.name} 
                    placeholder="Name" 
                    onChange={event => this.handleChange(event)}>
                </input>
                <input 
                    name='date' 
                    type="text" 
                    value={this.state.date} 
                    placeholder="Date (mm/dd)" 
                    onChange={event => this.handleChange(event)}>
                </input>
                <input 
                    name='time' 
                    type="text" 
                    value={this.state.time} 
                    placeholder="Time" 
                    onChange={event => this.handleChange(event)}>
                </input>
                <input 
                    name='number' 
                    type="number" 
                    value={this.state.number} 
                    placeholder="Number of guests" 
                    onChange={event => this.handleChange(event)}>
                </input>
                <button 
                    type="submit" 
                    onClick={event => this.handleClick(event)}
                >Make Reservation</button>
            </form>
        )
    }
}

export default Form
