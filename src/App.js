
import React, { Component } from "react";
import "./App.css";
import Profile from "../src/profile/Profile";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Profile />
        </header>
      </div>
    );
  }

import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import LandingPage from './landingpage/LandingPage';
import FileUpload from './components/firebase/FileUpload';
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
