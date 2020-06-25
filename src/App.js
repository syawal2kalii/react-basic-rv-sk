import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// Function Base
// function Clicker() {
//   function handleClick(e) {
//     alert("berhasil mengklik");
//     e.preventDefault()
//   }

//   return(
//     <a href="#" onClick={handleClick}>Klik Bro Sis!</a>
//   )
// }

class Toogle extends Component{
  constructor(props){
    super(props)
    this.state = {
      toogleStatus : true
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.setState(state => ({
      toogleStatus : !state.toogleStatus 
    }))
  }

  render(){
    return (
      <button onClick={this.handleClick}>
        {this.state.toogleStatus ? 'ON' : 'OFF'}
    <p>Kondisi sekarang {this.state.toogleStatus ? 'menyala' : 'mati'}</p>
      </button>
    )
  }
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <Clicker/> */}
        <Toogle></Toogle>
      </header>
    </div>
  );
}

export default App;
