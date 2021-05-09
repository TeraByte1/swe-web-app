import './App.css';
import * as React from 'react';
import {Component} from 'react';
import Form from './Form';

class App extends Component {
  render() {
  return (
    <div className="Covid App">
      <header className="App-header">
        <div className="options-thing">
        <Form />
        </div>
      </header>
    </div>
  );
  }
}
export default App;
