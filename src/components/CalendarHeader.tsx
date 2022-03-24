import React from 'react'

const CalendarHeader: React.FC = () => {
  return (
    <header className='calendar__header'>
        <div className='calendat__header-date'>

        </div>
        <div>
          <button className='btn'>Prev</button>
          <button className='btn'>Next</button>
        </div>
      </header>
  )
}

export default CalendarHeader