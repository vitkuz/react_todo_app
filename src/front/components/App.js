import React, { Component } from 'react';
import uuid from 'uuid/v1';

import Header from './Header.js';
import Footer from './Footer.js';
import Action from './Action.js';
import Content from './Content.js';
import AddItem from './AddItem.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.addItem = this.addItem.bind(this);
    this.selectRandom = this.selectRandom.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.removeAll = this.removeAll.bind(this);
    this.state = {
      title: 'App title',
      items: [
        {
          id: uuid(),
          title: 'Test 1'
        },
        {
          id: uuid(),
          title: 'Test 2'
        }
      ]
    }
  }
  addItem(e) {
    console.log('add item from app');
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    if (option) {
      this.setState( () => {
        return {
          items: this.state.items.concat({
            id:uuid(),
            title:option
          })
        }
      })
      e.target.elements.option.value = '';
    }
  }
  selectRandom() {
    const randomIndex = Math.floor(Math.random() * this.state.items.length);
    console.log(this.state.items[randomIndex]);
  }
  removeItem(e) {
    const idToRemove = e.target.dataset.id;
    const filtered = this.state.items.filter((item) => {
      return item.id !== idToRemove;
    });
    
    console.log(filtered);
    
    this.setState( () => {
      return {
        items: filtered
      }
    })
  }
  removeAll() {
    this.setState( () => {
      return {
        items: []
      }
    })
  }
  componentDidMount() {
    console.log('did mount')
  }
  componentDidUpdate() {
    console.log('did update')
  }
  render() {
    return (
        <div>
          <Header />
          <Action selectRandom={this.selectRandom} removeAll={this.removeAll}/>
          <Content items={this.state.items} removeItem={this.removeItem}/>
          <AddItem addItem={this.addItem}/>
          <Footer />
        </div>
    )
  }
}

export default App;
