import React, { Component } from 'react';

const ThisComponentStyles = {
  border: '1px solid #000',
  textAlign:'center',
  paddingTop: '10px',
  paddingBottom: '10px',
  marginBottom: '10px',
  marginTop: '10px',
};


class AddItem extends Component {
  render() {
    return (
        <div style={ThisComponentStyles}>
          <form onSubmit={this.props.addItem}>
            <input type="text" name="option"/>
            <button>Click to add</button>
          </form>
        </div>
    )
  }
}

export default AddItem;