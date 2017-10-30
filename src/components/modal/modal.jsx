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
    document.getElementById('myModal').style.display = "none";
  }

  render(props){
    return(
      <div id="myModal" className="modal">
        <div className="modal-content">
          <span onClick={this.closeModalClick.bind(this)} class="close">&times;</span>
          <h>{this.noteTitle}</h>
          <p>{this.noteContent}</p>
        </div>
      </div>
    )
  }
}

export default Modal;
