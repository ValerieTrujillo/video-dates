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
}

export default App;
