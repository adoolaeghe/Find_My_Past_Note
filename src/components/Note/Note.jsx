import React, { Component } from 'react'
import Modal from '../modal/modal'
import '../../style/Note.css'
import PropTypes from 'prop-types'


class Note extends Component {
  constructor(props){
    super(props);
    this.noteContent = props.noteContent;
    this.noteTitle = props.noteTitle;
    this.onClick = this.onClick.bind(this)
  }

  onClick() {
    document.getElementById(this.props.noteId.toString()).style.display = "block";
  }

  render(props){
    return(
      <div className = 'noteWrapper'>
        <div className = 'note fade-in' >
          <p className = 'noteContent'>{this.noteTitle}</p>
          <div className= 'noteTime'>Date: {this.props.date.substring(0,10)} <br/> at {this.props.date.substring(11,16)} </div>
          <button className = 'btnModal' onClick = {this.onClick.bind(this)} id = "myBtn">Open</button>
        </div>
        <Modal noteTitle = {this.noteTitle}
               noteContent = {this.noteContent}
               noteId = {this.props.noteId} />
      </div>
    )
  }
}

Note.propTypes = {
  noteContent: PropTypes.string
}

export default Note;
