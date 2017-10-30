import React, { Component } from 'react';
import Note from './components/Note/Note'
import NoteForm from './components/NoteForm/NoteForm'
import './style/App.css';
import './models/modal'

class App extends Component {
  constructor(props){
    super(props)
    this.addNote = this.addNote.bind(this);
    this.state = {
      notes: [],
    }
  }

  addNote(noteTitle, noteContent) {
    const previousNote = this.state.notes;
    previousNote.push({id: previousNote.length +1, noteContent: noteContent, noteTitle: noteTitle});
    localStorage['notes'] = JSON.stringify(previousNote);
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
            JSON.parse(localStorage['notes']).map((note) => {
              return (
                <Note noteContent = {note.noteContent} noteTitle = {note.noteTitle} noteId = {note.id} key={note.id}/>
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
