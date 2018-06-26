import React, { Component } from 'react';
import uuid from 'uuid/v1';

import Header from './Header';
import Footer from './Footer';
import Action from './Action';
import Content from './Content';
import AddItem from './AddItem';
import ModalWindow from './ModalShowRandomItem';

class App extends Component {
  state = {
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
    ],
    showModal: false
  };
  handleOpenModal = () => {
    this.setState({ showModal: true });
  };
  handleCloseModal = () => {
    this.setState({ showModal: false });
  };
  addItem = (e) => {
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
  };
  selectRandom = () => {
    const randomIndex = Math.floor(Math.random() * this.state.items.length);
    console.log(this.state.items[randomIndex]);
  };
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
  removeAll = () => {
    this.setState( () => {
      return {
        items: []
      }
    })
  }
  componentDidMount() {
    console.log('did mount')
    
    try {
    
      const appStateFromLocalStorage = JSON.parse(localStorage.getItem('todo_app'));
      
      console.log('app',app);
      
      this.setState( () => {
        return appStateFromLocalStorage;
      })
    
    } catch (e) {
      console.log(e);
    }
    
  }
  componentDidUpdate() {
    localStorage.setItem('todo_app',JSON.stringify(this.state));
  }
  render() {
    return (
        <div className="component-app-root">
          <Header>
            <div>
              LOGO
            </div>
            <div>
              <a href="#" onClick={this.handleOpenModal}>Open menu</a>
              &nbsp; | 
              <a href="#" onClick={this.handleCloseModal}>Close menu</a>
            </div>
            <div>
              USER MENU
            </div>
          </Header>
          <Action selectRandom={this.selectRandom} removeAll={this.removeAll}/>
          <Content items={this.state.items} removeItem={this.removeItem}/>
          <AddItem addItem={this.addItem}/>
          <Footer />
          <ModalWindow showModal={this.state.showModal} handleCloseModal={this.handleCloseModal}/>
        </div>
    )
  }
}

export default App;
