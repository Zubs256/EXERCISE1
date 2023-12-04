import React from 'react';
import './day.css';

const Day = ({ day, onSelectDate, selected, hasEvent }) => {
  const dayContainerClasses = `day-container ${selected ? 'selectedDay' : ''}`;
  return (
    <div
      className={dayContainerClasses}
      onClick={() => onSelectDate(day)}
    >
      {hasEvent ? <span>📥</span> : null}
      {day}
    </div>
  );
};

export default Day;