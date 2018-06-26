import React, { Component } from 'react';
import ReactModal from 'react-modal';

const ModalShowRandomItem = (props) => (
    <div>
      <ReactModal
          isOpen={props.showModal}
          contentLabel="Minimal Modal Example"
      >
        <h1>Random item</h1>
        <button onClick={props.handleCloseModal}>Close Modal</button>
      </ReactModal>
    </div>
)

export default ModalShowRandomItem;