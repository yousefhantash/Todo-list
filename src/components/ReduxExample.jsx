
import React from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { createStore } from 'redux';

const INCREMENT = 'INCREMENT';

const increment = () => ({
  type: INCREMENT,
});

const initialState = { count: 0 };

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + 1 };
    default:
      return state;
  }
}


const store = createStore(counterReducer);

function ReduxExample() {
  return (
 
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}

function Counter() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();
  
  return (
    <div className='justify-center items-center text-center'>
      <h1 className='p-2 text-[20px] bg-white'>{count}</h1>
      <button className='bg-red-700 h-10 rounded-full font-semibold m-4 p-2' onClick={() => dispatch(increment())}>Increment</button>
    </div>
  );
}

export default ReduxExample;