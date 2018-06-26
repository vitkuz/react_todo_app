console.log('101');

import { createStore } from 'redux';

const store = createStore((state = {count:0}, action) => {
  
  switch (action.type) {
    case 'INCREMENT':
      const incrementBy = typeof action.incrementBy === 'number' ? incrementBy : 1;
      return {
        count: state.count + 1
      };
    case 'DECREMENT':
      const decrementBy = typeof action.decrementBy === 'number' ? decrementBy : 1;
      return {
        count: state.count - 1
      };
    case 'SET':
      return {
        count: state.count - action.amount
      };
    case 'RESET':
      return {
        count: state.count - 1
      };
    default:
      return state;
  }
  
});

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch({
  type:'INCREMENT',
  incrementBy: 5
});

store.dispatch({
  type:'INCREMENT',
  incrementBy: 1
});

store.dispatch({
  type:'DECREMENT',
  decrementBy: 20
});

console.log(store.getState());