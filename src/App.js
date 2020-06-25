import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'

function Home() {
  return <h2>Halaman Home</h2>
}

function ListView() {
  return (
    <div>
      <h2> Semua User</h2>
      <ul>
        <Link to='users/muh'>Muh</Link> <br/>
        <Link to='users/syawal'>Syawal</Link>
      </ul>
    </div>
  )
}

function DetailView({match}) {
  return <h2> Ini Halaman {match.params.name}</h2>
}

function NoMatch() {
  return <h2>404, Halaman tidak ditemukan</h2>
}


class App extends Component{
  render(){
    return (
      <BrowserRouter>
        <div>
        <nav>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/users'>User</Link></li>
        </nav>
        <main>
          <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/users' exact component={ListView}/>
            <Route path='/users/:name' exact component={DetailView}/>
            <Route component={NoMatch} />
          </Switch>
        </main>      
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
