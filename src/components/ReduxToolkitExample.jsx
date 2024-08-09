
import { configureStore, createSlice } from '@reduxjs/toolkit';
import React from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';


const counterSlice = createSlice({
  name: 'counter',
  initialState: { count: 0 },
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
  },
});

const { actions, reducer } = counterSlice;

const store = configureStore({
  reducer,
});

function ReduxToolkitExample() {
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
      <button className='bg-yellow-600 h-10 rounded-full font-semibold m-4 p-2' onClick={() => dispatch(actions.increment())}>Increment</button>
    </div>
  );
}

export default ReduxToolkitExample;