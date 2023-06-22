
import React from 'react';
import { useHistory } from 'react-router-dom';

import ListUsers from './features/users/UsersList';
import AddUser from './features/users/AddUser';


function App() {
  const history = useHistory();
  return (
    <main>
      <ListUsers/>
      
      <AddUser/>
   
    </main>
  );
}

export default App;
