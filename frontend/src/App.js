import React, { Component } from 'react';
import logo from './img/logo.svg';
import './App.css';

class App extends Component {
    render() {
        let gifStyle = {
            'width': 300,
            'height': 300,
            'margin-top': 50
        };
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Simple Telegram Bot Manager :)</h2>
                </div>
                <p className="App-intro">
                    So, as we don't have nothing on frontend yet, here's a nice gif for u!
                    <br />
                    <img src="https://media.giphy.com/media/lEtVR2F951J7O/giphy.gif"
                        alt="random-horsehead-and-shit"
                        width="300" height="300"
                        style={gifStyle} />
                </p>
            </div>
        );
    }
}

export default App;
