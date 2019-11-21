import React from "react";
import "./modal.css";

export default class Modal extends React.Component {
  render() {
    if (!this.props.show) {
      console.log("when return null")
      return null;
    }
    return (<div>{this.props.children}</div>);
  }
}

/* export default class Modal extends React.Component {

  constructor() {
    super();
 
    this.state = {
      show: false
    };
 
    this.showModal = this.showModal.bind(this);
    this.onClose = this.onClose.bind(this);
  }

  showModal = e => {
    this.setState({
      show: !this.state.show
    });
  };

  onClose = e => {
    this.props.onClose && this.props.onClose(e);
  };


  render() {
    if (!this.props.show) {
      console.log("when return null")
      return null;
    }
    return (
      <div className='modal' id='modal'>
        <h2>Modal Window</h2>
        <p>How Are You</p>
      </div>
    );
  }
} */


/*export default class Modal extends React.Component {
  onClose = e => {
    this.props.onClose && this.props.onClose(e);
  };
  render() {
    if (!this.props.show) {
      return null;
    }
    return (
      <div className="modal" id="modal">
        <h2>Modal Window</h2>
        <div className="content">{this.props.children}</div>
        <div className="actions">
          <button className="toggle-button" onClick={this.onClose}>
            close
          </button>
        </div>
      </div>
    );
  }
}*/