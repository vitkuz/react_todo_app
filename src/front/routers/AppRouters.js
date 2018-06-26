import React, { Component } from 'react';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import uuid from 'uuid/v1';

import Header from '../components/Header';
import Footer from '../components/Footer';

import ModalWindow from '../components/ModalShowRandomItem';

import HomePage from '../components/pages/HomePage';
import ContactPage from '../components/pages/ContactPage';
import EditPage from '../components/pages/EditPage';

const Dashboard = (props) => {
  console.log(props);
  return (
      <div>
        <h1>Home</h1>
      </div>
  )
}

const About = () => {
  return (
      <div>
        <h1>About</h1>
      </div>
  )
}

const Contact = () => {
  return (
      <div>
        <h1>Contact <Link to="/"> Go home</Link> </h1>
      </div>
  )
};


class AppRoutes extends Component {
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
  updateItem = (e) => {
    e.preventDefault();
    console.log(e.target.elements);
  };
  onInputChange = (e) => {
    console.log(e.target);
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
        <BrowserRouter>
          <div>
            <Header title="Goooo!" subtitle="This is subtitle"/>
            <Switch>
              <Route path="/" component={Dashboard} exact={true}/>
              <Route path="/home" component={() => <HomePage selectRandom={this.selectRandom}
                                                             removeAll={this.removeAll}
                                                             items={this.state.items}
                                                             removeItem={this.removeItem}
                                                             addItem={this.addItem}/>} />
              <Route path="/edit/:id" component={(props) => <EditPage {...props}
                                                                      updateItem={this.updateItem}
                                                                      items={this.state.items}
                                                                      onInputChange={this.onInputChange}/>} />
              <Route path="/about" component={About} />
              <Route path="/add" component={About} />
              <Route path="/contact" component={ContactPage} />
              <Route component={() => <h1>Not found <Link to="/"> Go home</Link></h1>} />
            </Switch>
  
            <hr/>
            
            
            <Footer text="(c) Copy 2018"/>
            <div>
              <a href="#" onClick={this.handleOpenModal}>Open menu</a>
              &nbsp; |
              <a href="#" onClick={this.handleCloseModal}>Close menu</a>
            </div>
            <ModalWindow showModal={this.state.showModal} handleCloseModal={this.handleCloseModal}/>
      
          </div>
        </BrowserRouter>
    );
  }
}




export default AppRoutes;