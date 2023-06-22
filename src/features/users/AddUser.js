

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { addUser } from './usersSlice';
import './AddUser.css'



const AddUser = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [maxId, setMaxId] = useState(10); 

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  function handleSubmit(e) {
    e.preventDefault();

    

    const newUser = {
      id: maxId + 1,
      name,
      email,
      phone,
    };

    dispatch(addUser(newUser));
    console.log(newUser);

    setName('');
    setEmail('');
    setPhone('');

    setMaxId((prevMaxId) => prevMaxId + 1);

  }

  return (
    <div className='newUser-container'>
      <h2>Add User</h2>
      <form onSubmit={handleSubmit} className='container'>
        <div>
        <label htmlFor="name">
            Name:
          </label>
          <input type="text" id="name" value={name} onChange={handleNameChange} required autoComplete='on' autoSave='on'/>
          
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" value={email} onChange={handleEmailChange} required autoComplete='on' autoSave='on' />
        </div>
        <div>
          <label htmlFor="phone">Phone:</label>
          <input type="number" id="phone" value={phone} onChange={handlePhoneChange} required autoComplete='on' autoSave='on' />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddUser;