import React from 'react';
import { Link } from 'react-router-dom';

const ShowList = ({names}) => {

//   const [tasks, setTasks] = useState([]);

    return(
        <div>
        {names.map(contact => 
               <h4 className="contactName"><Link to={`/show/${names.indexOf(contact)}`}>{contact.name}</Link></h4>)
        }    
        </div>
    );

}

export default ShowList;