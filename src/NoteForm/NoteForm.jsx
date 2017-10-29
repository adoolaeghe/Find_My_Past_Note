import React, { Component } from 'react'
import './NoteForm.css'
import PropTypes from 'prop-types'

class NoteForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      newNoteContent: '',
    };
    this.handleUserInput = this.handleUserInput.bind(this)
  }

  handleUserInput(e){
     this.setState({
      newNoteContent: e.target.value
     })
  }

  render(){
    return(
      <div className='formWrapper'>
        <input className="noteInput" type="text" placeholder="Write a new note..." value={this.state.newNoteContent} onChange={this.handleUserInput}/>
        <input className="noteButton" type="button" value="Search" />
      </div>
    )
  }
}

export default NoteForm;
