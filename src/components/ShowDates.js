import React from 'react';
import PropTypes from 'prop-types';
const showDates = (props) => {
    const{date,deleteDate} = props;
    return (
        <div className='cita'>
          <p>Pet: <span>{date.pet}</span></p>
          <p>Owner: <span>{date.ownerName}</span></p>
          <p>Date: <span>{date.date}</span></p>
          <p>Time: <span>{date.time}</span></p>
          <p>Symptoms: <span>{date.symptoms}</span></p>
          <button className='button eliminar u-full-width' onClick={()=>deleteDate(date.id)}>Delete &times;</button>
        </div>
    );
}

showDates.propTypes = {
    date: PropTypes.object.isRequired,
    deleteDate:PropTypes.func.isRequired
}
export default showDates;
