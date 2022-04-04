import React, {useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import './App.css';

const AddContact = () => {

  const [contacts, setContacts] = useState([]);
  const [newContact, setnewContact] = useState( { 
    name: '',
    phone: '',
    email: '',
    address: ''
   });

   const history = useHistory();

   useEffect(() => {
    const readContacts = () => {
      if (localStorage.getItem('tasks')) {
        setContacts(JSON.parse(localStorage.getItem('tasks')))
      }
    }
    readContacts()
  }, []);

    const onCreate = () => {
      contacts.push(newContact);
      localStorage.setItem('tasks', JSON.stringify(contacts));
      setnewContact('')
  };

  const updateName = e => {
    setnewContact({ 
      ...newContact,
      name: e.target.value })
  };

  const updatePhone = e => {
    setnewContact({ 
        ...newContact,
        phone: e.target.value })
  };

  const updateEmail = e => {
    setnewContact({ 
        ...newContact,
        email: e.target.value })
  };

  const updateAddress = e => {
    setnewContact({ 
        ...newContact,
        address: e.target.value })
  };

  return ( 
    <div className="App">
      <form className="fillContact" onSubmit={onCreate}>
      <div className="mb-3">
      <label className="form-label">Name:</label>
        <input type="text"
                     autoFocus
                     className='form-control'
                     placeholder="Enter name" 
                     value={newContact.name} 
                     onChange={updateName} /> </div>
      <div className="mb-3">
      <label className="form-label">Phone:</label>
         <input type="text"
                      className='form-control'
                      placeholder="Enter phone number"
                      value={newContact.phone} 
                      onChange={updatePhone} /> </div>
      <div className="mb-3">
      <label className="form-label">Email:</label>
         <input type="text" 
                      className='form-control'
                      placeholder="example@gmail.com"
                      value={newContact.email} 
                      onChange={updateEmail} /> </div>
        <div className="mb-3">
      <label className="form-label">Address:</label>
         <input type="text"
                        className='form-control'
                        placeholder="Enter address"
                        value={newContact.address} 
                        onChange={updateAddress} /> </div>
        <button type="submit" className="btn btn-primary" >Save</button> &nbsp;&nbsp;&nbsp;
        <button className="btn btn-success" onClick={() => history.push('/')}>Back</button>
    </form> 
    </div>
    
   );

}

export default AddContact;