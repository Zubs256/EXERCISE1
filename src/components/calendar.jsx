import React from 'react';
import  Day  from './day';
import './calendar.css';

const Calendar = ({
  setSelectedDate,
  selectedDate,
  month,
  setMonth,
  setYear,
  year,
  events,
}) => {
  const monthTexts = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const handlePrevMonth = () => {
    if (month === 0) {
      setYear(year - 1);
      setMonth(11);
    } else {
      setMonth(month - 1);
    }
  };

  const handleNextMonth = () => {
    if (month === 11) {
      setYear(year + 1);
      setMonth(0);
    } else {
      setMonth(month + 1);
    }
  };

  const handlePrevYear = () => {
    setYear(year - 1);
  };

  const handleNextYear = () => {
    setYear(year + 1);
  };

  const daysInMonth = selectedDate ? new Date(year, month + 1, 0).getDate() : 0;
  const days = Array.from({ length: daysInMonth }, (_, index) => index + 1);

  return (
    <div className="calendar-container">
      <div className="year-month-toggles">
        <div className="year-toggle">
          <button onClick={handlePrevYear}>&lt;</button>
          <span>{year}</span>
          <button onClick={handleNextYear}>&gt;</button>
        </div>
        <div className="month-toggle">
          <button onClick={handlePrevMonth}>&lt;</button>
          <span>{monthTexts[month]}</span>
          <button onClick={handleNextMonth}>&gt;</button>
        </div>
      </div>
      <div className="calendar-days">
        {days.map((day) => (
          <Day
            key={day}
            day={day}
            onSelectDate={setSelectedDate}
            selected={day === selectedDate}
            hasEvent={events[`${day}-${month + 1}-${year}`]?.length > 0}
          />
        ))}
      </div>
    </div>
  );
};

export default Calendar ;