import React, { Component } from 'react'
import '../../style/Note.css'
import PropTypes from 'prop-types'

class Note extends Component {
  constructor(props){
    super(props);
    this.noteContent = props.noteContent;
    this.noteTitle = props.noteTitle;
  }

  style = {

  }
  render(props){
  console.log(this.noteTitle)
    return(
      <div className='note fade-in' >
        <p className= 'noteContent'>{this.noteContent}{this.noteTitle}</p>
      </div>
    )
  }
}

Note.propTypes = {
  noteContent: PropTypes.string
}

export default Note;
