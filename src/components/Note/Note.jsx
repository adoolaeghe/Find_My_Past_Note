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
    document.getElementById('myModal').style.display = "block";
  }




  render(props){
    return(
      <div className='note fade-in' >
        <p className= 'noteContent'>{this.noteTitle}</p>
        <button onClick={this.onClick} id="myBtn">Open Modal</button>
        <Modal noteTitle={this.noteTitle} noteContent={this.noteContent}/>
      </div>
    )
  }
}

Note.propTypes = {
  noteContent: PropTypes.string
}

export default Note;
