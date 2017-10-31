import React, { Component } from 'react'
import '../../style/modal.css'


class Modal extends Component {
  constructor(props){
    super(props);
    this.noteContent = props.noteContent;
    this.noteTitle = props.noteTitle;
    this.closeModalClick = this.closeModalClick
  }

  closeModalClick() {
    document.getElementById(this.props.noteId.toString()).style.display = "none";
  }

  render(props){
    return(
      <div id={this.props.noteId.toString()} className="modal">
        <div className="modal-content">
          <span onClick={this.closeModalClick.bind(this)} className="close">&times;</span>
          <div className="modalTitle">{this.noteTitle}</div>
          <p className="modalContent">{this.noteContent}</p>
        </div>
      </div>
    )
  }
}

export default Modal;
