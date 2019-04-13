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
