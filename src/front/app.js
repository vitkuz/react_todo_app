const appStore = {
  title: 'App!',
  subtitle: 'Subtitle',
  items: [
  
  ]
};

const showRandom = (e) => {
  if (appStore.items) {
  
  }
};

class Action extends React.Component {
  render() {
    return (
        <div>
          <div>
            <button onClick={showRandom}>Show random item</button>
          </div>
        </div>
    )
  }
}

class List extends React.Component {
  render() {
    return (
        <ul>
          {
            this.props.items.map((item,i) => {
              return <ListItem key={i} text={item}/>
              })
          }
        </ul>
    )
  }
}

class ListItem extends React.Component {
  render() {
    return (
        <li>
          {this.props.text}
        </li>
    )
  }
}

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.removeAllOptions = this.removeAllOptions.bind(this);
  }
  removeAllOptions(e) {
    console.log(this.props.options);
    this.props.options = [];
  }
  render() {
    return (
        <div>
          <div>
            <button onClick={this.removeAllOptions}>Remove all</button>
          </div>
          <div>
            <List items={this.props.options}/>
          </div>
        </div>
    )
  }
}

const Header = (props) => {
  // console.log(props);
  return (
      <div>
        <h1>
          {props.title}
        </h1>
        { !!appStore.subtitle && <p>{ appStore.subtitle }</p>}
      </div>
  )
};

class AddItem extends React.Component  {
  addItem(e) {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    if (option) {
      alert(option);
      e.target.elements.option.value = '';
    }
  }
  render() {
    return (
        <div>
          <form onSubmit={this.addItem}>
            <input type="text" name="option"/>
            <button>Click to add</button>
          </form>
        </div>
    )
  }
};

class App extends React.Component {
  render () {
    
    const title = 'Google';
    const options = ['Option one', 'Option two', 'Option three'];
    
    return (
        <div>
          <Header title={title}/>
          <Action />
          <Content options={options}/>
          <AddItem />
        </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));