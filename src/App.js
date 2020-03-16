import React from 'react';
import logo from './logo.svg';
import './App.css';

export class App extends React.Component {

    render() {

        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <p>
                        If you are ready, let's start:
                    </p>
                </header>
            </div>
        );
    }
}


export default App;
