
import React, { createContext, useContext, useState } from 'react';


const UserContext = createContext();

function ContextExample() {
  const [user, setUser] = useState({ name: "Yousef", age: 22 });

  return (

    <UserContext.Provider value={user}>
      <UserProfile />
    </UserContext.Provider>
  );
}

function UserProfile() {
 
  const user = useContext(UserContext);
  return <h1 className='p-4 text-[20px] bg-white'>{`Hello, ${user.name}!`}</h1>;
}

export default ContextExample;