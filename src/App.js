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
      i: 0,
    }
  }



  addNote(noteTitle, noteContent) {
    const previousNote = this.state.notes;
    if(previousNote.length !== 0){
      previousNote.push({id: previousNote.length +1, noteContent: noteContent, noteTitle: noteTitle});
      localStorage['notes'] = JSON.stringify(previousNote);
    } else {
      var notes = JSON.parse(localStorage['notes'])
      notes.push({id: previousNote.length +1, noteContent: noteContent, noteTitle: noteTitle});
      localStorage['notes'] = JSON.stringify(notes)
    }
    this.setState({
      notes: previousNote
    })
  }

  render() {
    if(localStorage['notes']){
    return (
      <div className="notesWrapper">
        <div className="notesHeader">
          <div className="heading">Note App</div>
        </div>
        <div className="notesBody ">
          {
            JSON.parse(localStorage['notes']).map((note) => {
              const i = this.state.i++
              console.log(i)
              return (
                <Note noteContent = {note.noteContent} noteTitle = {note.noteTitle} noteId = {i} key={note.id}/>
              )
            })
          }
        </div>
        <div className="notesFooter">
          <NoteForm addNote = {this.addNote} />
        </div>
      </div>
    );
  } else {
    return(
    <div className="notesWrapper">
      <div className="notesHeader">
        <div className="heading">Note App</div>
      </div>
    <div className="notesBody ">
    </div>
    <div className="notesFooter">
      <NoteForm addNote = {this.addNote} />
    </div>
  </div>
  )
  }
}
}

export default App;
