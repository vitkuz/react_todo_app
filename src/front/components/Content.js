import React, { Component } from 'react';

import List from './List'

const Content = (props) => (
    <div>
      <List items={props.items} removeItem={props.removeItem}/>
    </div>
)

export default Content;