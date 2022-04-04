import React, {useState, useEffect} from 'react';
import {Link, useParams, useHistory} from 'react-router-dom';
import './App.css';

const ShowContact = () => {
    let { index } = useParams();

    const history = useHistory();

   const contacts = JSON.parse(localStorage.getItem('tasks'));

   const onDelete = (cindex) =>{
    contacts.splice(cindex, 1);
    localStorage.setItem('tasks', JSON.stringify(contacts));
  }
    
    return (
        <div className="App"> 
            {/* {
                contacts.filter(contact => contact.name === name).map(contact =>  */}
                <div className="contact">
                   <div className='row'>
                       <div className='col'>
                       <h2>{contacts[index].name}</h2>
                       </div>
                       <div className='col'>
                       <button type="button" className="btn btn-sm btn-outline-light" onClick={() => history.push(`/edit/${index}`)}>
                           Edit&nbsp;<i class="fa fa-pencil-square-o" aria-hidden="true"></i>
                       </button>
                       </div>
                   </div>
                    
                    
                    <div className="detail">
                    <p><i className="fa fa-phone-square"></i>&nbsp;&nbsp;{contacts[index].phone}</p>
                    <p><i className="fa fa-envelope-square"></i>&nbsp;&nbsp;{contacts[index].email}</p>
                    <p><i class="fa fa-home"></i>&nbsp;&nbsp;{contacts[index].address}</p>
                    </div>
                    
                    <button className="btn btn-danger" 
                            onClick={() => {onDelete(index); 
                                            history.push('/'); 
                                            alert(`Contact has been deleted!`)}}>
                            <Link to={`/`}></Link>
                            Delete</button> &nbsp;&nbsp;
                    <button className="btn btn-primary" onClick={() => history.push('/')}>Back</button>
                    </div>    {/*)
            } */}
            
        </div>
    );
}

export default ShowContact; 