import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import LandingPage from './landingpage/LandingPage';
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
                    <AppBar position="static" color="default">
                        <Toolbar>
                            <Typography variant="h6" color="inherit">
                                Spark
                            </Typography>
                        </Toolbar>
                    </AppBar>
                    <Route exact path="/" component={LandingPage} />
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
