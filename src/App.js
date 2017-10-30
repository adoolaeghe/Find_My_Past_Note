import React, { Component } from 'react';
import Note from './components/Note/Note'
import NoteForm from './components/NoteForm/NoteForm'
import './style/App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.addNote = this.addNote.bind(this);
    this.state = {
      notes: [],
    }
  }

  addNote(note) {
    const previousNote = this.state.notes;
    previousNote.push({id: previousNote.length +1, noteContent: note});
    this.setState({
      notes: previousNote
    })
  }

  render() {
    return (
      <div className="notesWrapper">
        <div className="notesHeader">
          <div className="heading">Note App</div>
        </div>
        <div className="notesBody ">
          {
            this.state.notes.map((note) => {
              return (
                <Note noteContent = {note.noteContent} noteId = {note.id} key={note.id}/>
              )
            })
          }
        </div>
        <div className="notesFooter">
          <NoteForm addNote = {this.addNote} />
        </div>
      </div>
    );
  }
}

export default App;
