import React, { Component } from 'react';

import List from './List'

const Content = (props) => (
    <div>
      {
        props.items.length > 0 ? <List items={props.items} removeItem={props.removeItem}/> : 'No items'
      }
    </div>
)

export default Content;