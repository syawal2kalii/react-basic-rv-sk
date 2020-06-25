import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './List'

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

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      todoItem : '',
      items : []
    }
  }

  handleSubmit = (event)=>{
    event.preventDefault()
    this.setState({
      items : [...this.state.items,this.state.todoItem],
      todoItem : ''
    });
  }

  handleChange = (event)=>{
    this.setState({
      todoItem : event.target.value
    })
  }

  render(){
    return (
      <div>
        <p>to do List</p>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.todoItem} onChange={this.handleChange}/>
          <button>Add</button>
        </form>
        <List items={this.state.items} />
      </div>
    )
  }
}

export default App;
