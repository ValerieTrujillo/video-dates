import React, { Component } from 'react';
import FileUpload from './components/firebase/FileUpload'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <FileUpload />
        </header>
      </div>
    );
  }

import { BrowserRouter, Route } from "react-router-dom";
import LandingPage from './landingpage/LandingPage';
import NavBar from './navigation/NavBar';
import './App.css';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div 
                    className="App"
                    style={{
                        height: "100vh",
                        width: "100vw"
                    }}>
                    <NavBar />
                    <Route exact path="/" component={LandingPage} />
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
