import React, { Component } from 'react';
import firebase from 'firebase/compat/app';
import firebaseConfig from './database/firebase';
import { css } from './Styles/app_styles';


class TimeInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        
        firebase.initializeApp(firebaseConfig);
    }

    handleChange(event) {
        this.setState({time: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        const timeRef = firebase.database().ref('times');
        const time = {
            time: this.state.time
        }
        timeRef.push(time);
        this.setState({
            time: ''
        });
    }

    render() {
       return (
          <form className="flex space-x-6" onSubmit={this.handleSubmit}>
              <input  type="time" name="time" value={this.state.time} onChange={this.handleChange} />
               <button className= {css._button} type="submit"> Check In </button>
          </form>
       );
    }
}

export default TimeInput;
