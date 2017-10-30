import React, { Component } from 'react'
import '../../style/NoteForm.css'
import PropTypes from 'prop-types'

class NoteForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      newNoteTitle: '',
      newNoteContent: '',
    };
    this.handleUserInputNote = this.handleUserInputNote.bind(this)
    this.handleUserInputTitle = this.handleUserInputTitle.bind(this)
    this.writeNote = this.writeNote.bind(this)
  }

  handleUserInputNote(e){
      this.setState({
          newNoteContent: e.target.value,
      })
  }

  handleUserInputTitle(e){
      this.setState({
          newNoteTitle: e.target.value,
      })
  }

  writeNote(){
    this.props.addNote(this.state.newNoteTitle, this.state.newNoteContent);
    this.setState({
        newNoteContent: '',
        newNoteTitle: '',
    })
  }

  render(){
    return(
      <div className='formWrapper'>
        <input className="noteTitle" type="text" placeholder="note Title" value={this.state.newNoteTitle} onChange={this.handleUserInputTitle}/>
        <input className="noteInput" type="text" placeholder="Write a new note..." value={this.state.newNoteContent} onChange={this.handleUserInputNote}/>
        <input className="noteButton" type="button" value="Search" onClick={this.writeNote.bind(this)}/>
      </div>
    )
  }
}

export default NoteForm;
