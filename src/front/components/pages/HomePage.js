import React, { Component } from 'react';

import Action from '../Action';
import Content from '../Content';
import AddItem from '../AddItem';

const HomePage = (props) => {
  return (
      <div className="content">
        <h1>Home page</h1>
        <Action selectRandom={props.selectRandom} removeAll={props.removeAll}/>
        <Content items={props.items} removeItem={props.removeItem}/>
        <AddItem addItem={props.addItem}/>
      </div>
  )
}



HomePage.defaultProps = {
  title: 'Todo app !!!!!!!!!!!',
  subtitle: 'Subtitle of the app'
};

export default HomePage;