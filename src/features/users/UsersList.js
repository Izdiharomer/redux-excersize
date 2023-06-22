
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchUsersAsync } from './usersSlice';
import { deleteItem } from './usersSlice';

 

const ListUsers = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.list);
  const isLoading = useSelector((state) => state.users.isLoading);

  useEffect(() => {
    dispatch(fetchUsersAsync());
  }, [dispatch]);

  return (
    <div>
      <h2>Number Of Users: {users.length}</h2>
      {isLoading ? (
        <div class="loader"></div>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <span>
                <button onClick={() => dispatch(deleteItem(user.id))}>Delete</button> 
                </span>

                
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ListUsers;



