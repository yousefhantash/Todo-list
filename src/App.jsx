
import React from 'react';
import ContextExample from './components/ContextExample';
import ReduxExample from './components/ReduxExample';
import ReduxToolkitExample from './components/ReduxToolkitExample';

function App() {
  return (
    <div className='bg-cyan-200 flex flex-col justify-center items-center m-16 '>

      <h1 className='p-8 text-[26px] text-lime-950'>Context API Example</h1>
      <ContextExample />
      
      <h1 className='p-8 text-[26px] text-red-700'>Redux Example</h1>
      <ReduxExample />
      
      <h1 className='p-8 text-[26px] text-yellow-600'>Redux Toolkit Example</h1>
      <ReduxToolkitExample />

    </div>
  );
}

export default App;