import React, { Component } from 'react'
import './NoteForm.css'
import PropTypes from 'prop-types'

class NoteForm extends Component {
  constructor(props){
    super(props);
    this.state = {
    };
  }

  render(){
    return(
      <div className='formWrapper'>
        <input className="noteInput" type="text" placeholder="this.state.newNoteContent" />
        <input className="noteButton" type="button" value="Search" />
      </div>
    )
  }
}

export default NoteForm;
