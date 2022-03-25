import React from 'react'

interface CalendarHeaderProps {
  dateDisplay: string,
  onNext: () => void,
  onBack: () => void
}

const CalendarHeader: React.FC<CalendarHeaderProps> = ({ onNext, onBack, dateDisplay }) => {
  return (
    <header className='calendar__header'>
        <div className='calendat__header-date'>
        {dateDisplay}
        </div>
        <div>
          <button onClick={onBack} className='btn'>Prev</button>
          <button onClick={onNext} className='btn'>Next</button>
        </div>
      </header>
  )
}

export default CalendarHeader