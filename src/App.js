import React, { Component } from 'react';
import Note from './Note/Note'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      notes: [
        {id: 1, noteContent: "Note 1 here !"},
        {id: 2, noteContent: "Note 2 here !"}
      ],
    }
  }
  render() {
    return (
      <div>
        <h1> Note app </h1>
        <Note noteContent= {} noteId = {} key={}/>
      </div>
    );
  }
}

export default App;
