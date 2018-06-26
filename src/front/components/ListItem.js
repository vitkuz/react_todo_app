import React, { Component } from 'react';
import {Link} from 'react-router-dom';

const ListItem = (props) => (
    <div>
      <strong>{props.title}</strong> - <Link to={`/edit/${props.id}`}> {props.id} </Link> - <a href="#" onClick={props.removeItem} data-id={props.id}>Remove item</a>
    </div>
)

export default ListItem;