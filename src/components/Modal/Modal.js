import React, { Component } from 'react';
import styles from './modal.module.css';

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handlerKeydown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handlerKeydown);
  }

  handlerKeydown = event => {
    if (event.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleOverlayClick = event => {
    if (event.target === event.currentTarget) {
      this.props.onClose();
    }
  };
  render() {
    return (
      <div className={styles.Overlay} onClick={this.handleOverlayClick}>
        <div className={styles.Modal}>
          <img src={this.props.url} alt="" />
        </div>
      </div>
    );
  }
}

export default Modal;
