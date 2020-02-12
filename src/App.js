import './App.css';
import React, { Component } from 'react';
import CardList from "./components/cardList/CardList"

class App extends Component {
  state = { monsters:[],
          searchf:"" }

  componentDidMount()
  {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response =>response.json())
    .then(res => this.setState({monsters: res}));
  }
  render() { 
    const {monsters,searchf}=this.state;
    const filmonsters=monsters.filter(m => m.name.toLowerCase().includes(searchf.toLowerCase()));
    return ( <div className="App">
        <h1>Monsters rOlODEX</h1>
          <input type="search" placeholder="monster search" onChange={e=> this.setState({searchf:e.target.value})}></input>
          <br/>
          <br/>
          <CardList monster={filmonsters}/>
      </div> );
  }
}
 
export default App;
