import React, { Component } from 'react';

const ListItem = (props) => (
    <div>
      <strong>{props.title}</strong> - {props.id} - <a href="#" onClick={props.removeItem} data-id={props.id}>Remove item</a>
    </div>
)

export default ListItem;