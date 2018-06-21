import React, { Component } from 'react';

import ListItem from './ListItem';

const List = (props) => (
    <div>
      {
        props.items.map(({ id, title }) => {
          return <ListItem key={id} title={title} id={id} removeItem={props.removeItem}/>
        })
      }
    </div>
)

export default List;