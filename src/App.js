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
}

export default App;
