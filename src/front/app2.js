class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count:0
    }
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
   
  }
  componentDidMount() {
    console.log('componentDidMount');
    
    try {
      const stateFromLocalStorage = JSON.parse(localStorage.getItem('_counter'));
      const count = parseInt(stateFromLocalStorage.count,10);
      console.log(count);
      
      this.setState(() => {
        return {
          count
        }
      })
    } catch(e) {
      console.log('There is no data in local storage')
    }
  }
  componentDidUpdate() {
    console.log('componentDidUpdate');
    localStorage.setItem('_counter',JSON.stringify({count:this.state.count}))
  }
  increment(e) {
    console.log('++',this.state);
    this.setState((prevState) => {
      return {
        count: prevState.count + 1
      }
    })
  }
  decrement(e) {
    console.log('--',this.state);
    this.setState((prevState) => {
      return {
        count: prevState.count - 1
      }
    })
  }
  render () {
    return (
        <div>
          Counter: {this.state.count}
          <div>
            <button onClick={this.increment}>Increment++</button>
            <button onClick={this.decrement}>Decrement--</button>
          </div>
        </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));