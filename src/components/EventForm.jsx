import React, { useState } from 'react';
import './EventForm.css';

const EventForm = ({ selectedDate, onSubmit, year, month }) => {
  const [event, setEvent] = useState('');
  const monthTexts = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  const handleInputChange = (e) => {
    setEvent(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(event);
    setEvent('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Event for {`${selectedDate}-${monthTexts[month]}-${year}`}: </label>
        <input type="text" value={event} onChange={handleInputChange} />
      </div>
      <button type="submit" className='add-event'>Submit</button>
    </form>
  );
};

export default EventForm ;