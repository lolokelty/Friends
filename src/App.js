import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
  super();
  this.state = {
    friends: [],
    picture: '',
    name: ''
  };
  }

  updatePicture(value){
this.setState({picture: value});
  }
updateName(value){
  this.setState({name: value});
}

addFriend(){
const { friends, picture, name } = this.state;
let newFriends = friends.slice();
newFriends.push({ picture, name });

this.setState({ friend: newFriends, picture: '', name: ''});
}


  render() {
    const friends = this.state.friends.map ( ( friends, index ) => (
    <div key={ `friends ${ index } ${friends.name }`}>
    <img width= "100px" src= { friends.picture } />
  <span>{ friends.name }</span>
    </div>
    ));

    
    return (
      <div>
        <span>Picture:</span>
        <input onChange={( e )=> this.updatePicture( e.target.value)} value={ this.state.picture }/>

        <span>Name:</span>
        <input onChange={( e )=> this.updateName( e.target.value )} value={ this.state.name }/>
        <button>Add Friends</button>

        { friends }
      </div>
    );
  }
}

export default App;
