import React from 'react'

const Day: React.FC<any> = (day) => {
    const classValue = `day ${day.value === 'padding' ? 'padding' : ''} ${day.isCurrentDay ? 'currentDay' : ''}`;

    return (
        <div className={classValue}>
            {day.value === 'padding' ? '' : day.value}
        </div>
    )
}

export default Day