import React, {useState} from 'react';
import { useHistory, useParams } from 'react-router-dom';
import './App.css';
import ShowList from './showList';

const Home = () => {

  //  let { cname } = useParams();

    const history = useHistory();
    const [name, setName] = useState('');

    const contacts = JSON.parse(localStorage.getItem('tasks'));

    const updateSearchName = (e) => {
      setName(e.target.value)
    }

    const dynamicSearch = () => {
      return contacts.filter(contact => contact.name.toLowerCase().includes(name.toLowerCase()))
    }
    
    return(
        <div  className='App'>
          <h2><i className="fa fa-address-book"></i>&nbsp;Phonebook</h2>
          <div className='phonebook'>
          <button type="button" className="btn btn-sm btn-outline-dark" onClick={() => history.push('/add')}>
          Add <i className="fa fa-user-plus" ></i> 
          </button> &nbsp;
             <input type="text"
               value= {name}
               placeholder="Search Contact"
               onChange={updateSearchName}  /> &nbsp;
             <button className="btn btn-warning btn-sm" > 
                Search </button> <br /><br /> 
             </div>
           <div className='list'>
           {contacts.length === 0 ? <h5>There are no contacts.</h5> : <ShowList names = {dynamicSearch()} />   }
             </div>   
          {/* {JSON.stringify(contacts)} */}
        </div>
    );
  }

  export default Home;