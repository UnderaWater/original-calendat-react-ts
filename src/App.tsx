import React, { useEffect, useState } from 'react';
import './App.css';
import CalendarHeader from './components/CalendarHeader';
import Day from './components/Day';
import { useDate } from './hooks/useDate';

const App: React.FC = () => {
  const [nav, setNav] = useState<number>(0);
  const { days, dateDisplay } = useDate(nav);

  return (
    <div className="calendar-container">
      <CalendarHeader dateDisplay={dateDisplay}
          onNext={() => setNav(nav + 1)}
          onBack={() => setNav(nav - 1)}/>
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
      {days.map((day, index) => (
            <Day
              key={index}
              day={day}
            />
          ))}
      </div>
    </div>
  );
}

export default App;
