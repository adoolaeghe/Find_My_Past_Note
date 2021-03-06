import React, { Component } from 'react';
import Header from './components/header/header'
import Note from './components/Note/Note'
import NoteForm from './components/NoteForm/NoteForm'
import './style/App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.addNote = this.addNote.bind(this);
    this.state = {
      notes: [],
      noteId: 0,
    }
  }



  addNote(noteTitle, noteContent) {
    const previousNote = this.state.notes;
    if((localStorage['notes'] == undefined)){
      previousNote.push({noteContent: noteContent, noteTitle: noteTitle, date: new Date()});
      localStorage['notes'] = JSON.stringify(previousNote);
    } else {
      const notes = JSON.parse(localStorage['notes'])
      notes.push({ noteContent: noteContent, noteTitle: noteTitle, date: new Date()});
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
          <Header />
          <div className="notesBody">
            {
              JSON.parse(localStorage['notes']).map((note) => {
                return (
                  <Note noteContent = {note.noteContent}
                        noteTitle = {note.noteTitle}
                        noteId = {this.state.noteId++}
                        key = {this.state.noteId++}
                        date= {note.date}/>
                )
              })
            }
          </div>
          <NoteForm addNote = {this.addNote} />
        </div>
      );
    } else {
      return(
        <div className="notesWrapper">
          <Header />
          <div className="notesBody" />
          <div className="notesFooter">
            <NoteForm addNote = {this.addNote} />
          </div>
        </div>
      )
    }
  }
}

export default App;
