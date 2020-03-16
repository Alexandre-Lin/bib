import React from 'react';
import logo from './logo.svg';
import './App.css';

export class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <p>
                        Please choose your start option :
                    </p>
                    <i>A quick start will load only a few restaurants whereas a complete start will load all the
                        restaurants but will take time.</i>
                </header>
            </div>
        );
    }
}


export default App;
