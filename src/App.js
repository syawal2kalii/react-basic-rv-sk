import React from 'react';
import logo from './logo.svg';
import './App.css';

function Biodata(props) {
  return <span> Umur {props.age1}</span>
}

function Greeting(props) {
  return <h1>Halo {props.name} <Biodata age1={props.age}/></h1>
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Greeting name="Syawal" age="10"/>
        {/* reusable */}
        <Greeting name="Syawal" age="22"/>
      </header>
    </div>
  );
}

export default App;
