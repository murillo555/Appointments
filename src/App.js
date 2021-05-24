import React,{useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import Form  from './components/Form'
import ShowDates  from './components/ShowDates'


function App() {

  let initialDates = JSON.parse(localStorage.getItem('dates'));

  if(!initialDates){
    initialDates = [];
  }

  const [dates, setDates] = useState(initialDates)

  useEffect(() => {
    let initialDates = JSON.parse(localStorage.getItem('dates'));
    if(initialDates){
      localStorage.setItem('dates',JSON.stringify(dates));
    }else{
      localStorage.setItem('dates', JSON.stringify([]));
    }
  }, [dates])

  //Add Appointment Method
  const addDate = date =>{
    setDates([
      ...dates,
      date
    ])
  }
  //Delete a appointment Method
  const deleteDate =(id)=>{  
      
      const newDates = dates.filter(date=> date.id !== id)
      setDates(newDates);
  }
  //Dinamic Title
  const title = dates.length === 0 ? 'no appointments' : 'Manage your Appoinments';

  return (

    <>
      <h1>Patients Manager</h1>
      <div className='container'>
        <div className='row'>

          <div className='one-half column'>
            <Form addDate={addDate}/>
          </div>
          <div className='one-half column'>
            <h2>{title}</h2>
            {dates.map(date=>(<ShowDates key={date.id} date={date} deleteDate={deleteDate}/>))}
          </div>
        </div>
      </div>
    </>
  );
}

Form.propTypes={
  addDate:PropTypes.func.isRequired
}

export default App;
