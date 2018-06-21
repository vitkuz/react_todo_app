console.log('!');

const myName = 'Vitali';

const object = {
  name: 'Vit',
  age: 'Age',
};

const isLogin = true;

const printFooter = () => {
  
  const print = isLogin ? <div>
    isLogin = true
  </div> : <div>
    isLogin = false
  </div>;
  
  return print;
  
};

const Jsx = (props) => {
  console.log(props);
  return (<div>
    <ol>
      <li>{myName}</li>
      {
      
      }
      <li>2</li>
      <li>{object.name}</li>
      {printFooter()}
    </ol>
  </div>)
};

ReactDOM.render(<Jsx to={() => 1} myname={myName}/>, document.getElementById('app'));