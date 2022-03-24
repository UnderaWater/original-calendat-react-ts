import React, { useState } from 'react';
import './App.css';
import CalendarHeader from './components/CalendarHeader';
import Day from './components/Day';


const App: React.FC = () => {
  const [nav, setNav] = useState<number>(0);
  const [clicked, setClicked] = useState();
  const [events, setEvents] = useState([]);
  const [dateDisplay, setDateDisplay] = useState('');

  return (
    <div className="calendar-container">
      <CalendarHeader />
      <div className='calendar__weekdays'>
        <div>
          Sunday
        </div>
        <div>
          Monday
        </div>
        <div>
          Tuesday
        </div>
        <div>
          Wednesday
        </div>
        <div>
          Thursday
        </div>
        <div>
          Friday
        </div>
        <div>
          Satyrday
        </div>
      </div>
      <div className='calendar__days'>
        {days.map((day, index) => {
          <Day key={index} day={day} />
        })}
      </div>
    </div>
  );
}

export default App;
