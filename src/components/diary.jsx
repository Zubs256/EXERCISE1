"use client";
import { useState } from 'react';

const Diary = () => {
  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState(new Date().getMonth() + 1); // Months are zero-based

  const daysInMonth = new Date(year, month, 0).getDate();
  const startDay = new Date(year, month - 1, 1).getDay(); // Day of the week (0-6)

  const handlePrevYear = () => {
    setYear(year - 1);
  };

  const handleNextYear = () => {
    setYear(year + 1);
  };

  const handlePrevMonth = () => {
    setMonth(month === 1 ? 12 : month - 1);
  };

  const handleNextMonth = () => {
    setMonth(month === 12 ? 1 : month + 1);
  };

  return (
    <div>
      <div className='date'>
        <h1>Diary</h1>
      
      
      <div className='row1'>
      <button id='btn' onClick={handlePrevMonth}>&lt;</button>
      <p id='ya'>
        {new Date(year, month - 1).toLocaleString("default", { month: "long" })}
      </p>
      <button id='btn' onClick={handleNextMonth}>&gt;</button>
      </div>

      <div className='row1'>
      <button id='btn' onClick={handlePrevYear}>&lt;</button>
      <p id='ya'>{year}</p>
      <button id='btn1'  onClick={handleNextYear}>&gt;</button>
      </div>
      </div>

      <div id='datedisplay'>
        {[...Array(daysInMonth)].map((_, index) => (
          <button key={index + 1}>{index + 1}</button>
        ))}
      </div>
    </div>
  );
};

export default Diary