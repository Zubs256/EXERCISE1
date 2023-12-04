"use client";
import { useState } from "react";
import EventForm from "@/components/EventForm";
import Calendar from "@/components/calendar";


export default function Home() {
  const [month, setMonth] = useState(new Date().getMonth());
  const [year, setYear] = useState(new Date().getFullYear());
  const [selectedDate, setSelectedDate] = useState(new Date().getDate());
  const [events, setEvents] = useState({});

  const handleSelectDate = (date) => {
    setSelectedDate(date);
  };

  const handleAddEvent = (event) => {
    setEvents((prevEvents) => ({
      ...prevEvents,
      [`${selectedDate}-${month + 1}-${year}`]: [...(prevEvents[`${selectedDate}-${month + 1}-${year}`] || []), event],
    }));
  };


  return (
    <main className="my-diary-container">
      <h1>Zubedahs Diary</h1>
      <Calendar
        setSelectedDate={handleSelectDate}
        selectedDate={selectedDate}
        year={year}
        month={month}
        setMonth={setMonth}
        events={events}
        setYear={setYear}
      />
      <EventForm selectedDate={selectedDate} onSubmit={handleAddEvent} year={year} month={month} />
      {events[`${selectedDate}-${month + 1}-${year}`] && (
        <div className='events-container'>
          <h2>Events for {`${selectedDate}-${month}-${year}`}:</h2>
          <ul>
            {events[`${selectedDate}-${month + 1}-${year}`].map((event, index) => (
              <li key={index}>{event}</li>
            ))}
          </ul>
        </div>
      )}
    </main>
  );
}
