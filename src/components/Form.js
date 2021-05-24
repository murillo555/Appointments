import React,{useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
const Form = (props) => {
   
  const {addDate} = props;  
  const [date, setDate] = useState({
      pet:'',
      ownerName:'',
      date:'',
      time:'',
      symptoms:''
  })
  const [error, setError] = useState(false);

  //With All Inputs
  const updateState = e =>{
        setDate({ ...date,[e.target.name]: e.target.value})
  }

  const formSubmit = e =>{
    e.preventDefault();

    if(date.pet.trim() === '' || date.ownerName.trim() === '' || date.date.trim() === '' || date.time.trim() === '' || date.symptoms.trim() === ''){
        console.log('hay un error');
        setError(true);
        return;
    }
    //add Date id
    date.id = uuidv4();
    //ad Date tu Dates Array State
    addDate(date);
    //reset Form
    setDate(({
        pet:'',
        ownerName:'',
        date:'',
        time:'',
        symptoms:''
    }))
    setError(false);
  }
    return (
        <>
           <h2>Dates</h2>
           {error? <p className='alerta-error'>It's Necessary to enter all the data</p>: null}
           <form onSubmit={formSubmit}>
               <label>Pet's Name</label>
               <input type='text' name='pet' value={date.pet} className='u-full-width' placeholder='Pet Name' onChange={updateState}/> {/*Full width es para que ocupe todo el espacio */}
               <label>Pet Owner Name</label>
               <input type='text' name='ownerName' value={date.ownerName} className='u-full-width' placeholder='Owner name' onChange={updateState}/>
               <label>Date</label>
               <input type='date' name='date' value={date.date} className='u-full-width' onChange={updateState} />
               <label>Time</label>
               <input type='Time' name='time' value={date.time} className='u-full-width' onChange={updateState} />
               <label>Symptoms</label>
               <textarea name='symptoms' value={date.symptoms} className='u-full-width' onChange={updateState}></textarea>
               <button type='submit' className='u-full-width button-primary' onChange={updateState}>Add Date</button>
           </form>
        </>
    );
}

export default Form;
