import React, { useEffect, useState } from 'react';
import './App.css';
import CalendarHeader from './components/CalendarHeader';
import Day from './components/Day';


const App: React.FC = () => {
  const [nav, setNav] = useState<number>(0);
  const [clicked, setClicked] = useState();
  const [events, setEvents] = useState([]);
  const [dateDisplay, setDateDisplay] = useState('');

  useEffect(() => {
    const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const date: Date = new Date();

    if (nav !== 0) {
      date.setMonth(new Date().getMonth() + nav);
    }

    const day: number = date.getDate();
    const month: number = date.getMonth();
    const year: number = date.getFullYear();

    const firstDayOfMonth = new Date(year, month, 1);
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const dateString = firstDayOfMonth.toLocaleDateString('en-us', {
      weekday: 'long',
      year: 'numeric',
      month: 'numeric',
      day: 'numeric'
    });

    setDateDisplay(`${date.toLocaleDateString('en-us', { month: 'long' })} ${year}`);

    const paddingDays = weekdays.indexOf(dateString.split(', ')[0]);
    const daysArr = [];

    for (let i = 1; i < paddingDays + daysInMonth; i++) {
      const strDay = `${month + 1}/${i - paddingDays}/${year}`;
      
      if (i > paddingDays) {
        daysArr.push({
          value: i - paddingDays,
          isCurrentDay: i - paddingDays === day && nav === 0,
          date: strDay,
        })
      } else {
        daysArr.push({
          value: 'padding',
          isCurrentDay: false,
          date: '',
        });
      }
    }

  }, [nav])

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
        {/* {days.map((day, index) => {
          <Day key={index} day={day} onClick={() => {
            if (day.value !== 'padding') {
              setClicked(day.date)
            }
          }} />
        })} */}
      </div>
    </div>
  );
}

export default App;
