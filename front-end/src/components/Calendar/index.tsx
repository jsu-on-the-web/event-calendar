import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

import CalendarCell from '../CalendarCell/index';
import './index.scss';


interface CalendarProps { }

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  /* -------------------------------------------------------------------------- */
  /*                           Constructors/Generators                          */
  /* -------------------------------------------------------------------------- */

  // Calendars consist of a header with the current month and year, a subheader listing the day names, and a grid of days
  // Every "page" of the calendar consists of 5 rows and 7 columns of days
  // We generate the headers here, but use the CalendarCell component to represent the days
  const generateCalendar = (date: Date) => {
    // Rendering the calendar requires the current month and year
    const month = date.getMonth();
    const year = date.getFullYear();
    const firstDayOfMonth = new Date(year, month, 1);
    const lastDayOfMonth = new Date(year, month + 1, 0);
    const daysInMonth = lastDayOfMonth.getDate();
    const firstDayOfWeek = firstDayOfMonth.getDay();
    const calendar = [];
    const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    /**======================
     **      Day Names
     *========================**/
    const dayNamesRow = (
      <tr key="day-names" className="calendar-header__day-names">
        {dayNames.map((dayName, index) => (
          <th key={index} className="calendar-header__day-name">
            {dayName}
          </th>
        ))}
      </tr>
    );
    calendar.push(dayNamesRow);

    let dayCounter = 1;

    /**======================
     **      Days
     *========================**/
    for (let i = 0; i < 6; i++) { // Maximum of 6 rows in a calendar
      const row = [];
      for (let j = 0; j < 7; j++) { // 7 days in a week
        if (i === 0 && j < firstDayOfWeek) {
          // Fill empty cells before the first day of the month
          row.push(<CalendarCell key={`empty-${i}-${j}`} assignedDate={undefined} isSelected={false} onClick={() => { }} />);
        } else if (dayCounter > daysInMonth) {
          // Fill empty cells after the last day of the month
          row.push(<CalendarCell key={`empty-${i}-${j}`} assignedDate={undefined} isSelected={false} onClick={() => { }} />);
        } else {
          // Fill cells with the days of the month
          row.push(
            <CalendarCell
              key={dayCounter}
              assignedDate={dayCounter}
              isSelected={selectedDate?.getDate() === dayCounter}
              onClick={() => setSelectedDate(new Date(year, month, dayCounter))}
            />
          );
          dayCounter++;
        }
      }
      calendar.push(<tr key={i} className='calendar__calendar-row'>{row}</tr>);
    }

    return calendar;
  };

  return (
    <div className="calendar">
      {/* Header with the current month and year, as well as arrows for moving back and forwards through the calendar */}
      <table>
        <thead>
          <tr>
            <th colSpan={7} className="calendar__header">
              <FontAwesomeIcon
                icon={faAngleLeft}
                className="calendar-header__arrow"
                onClick={() => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1))}
              />
              {currentDate.toLocaleString('default', { month: 'long' })} {currentDate.getFullYear()}
              <FontAwesomeIcon
                icon={faAngleRight}
                className="calendar-header__arrow"
                onClick={() => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1))}
              />
            </th>
          </tr>
        </thead>
        <tbody>{generateCalendar(currentDate)}</tbody>
      </table>
    </div>
  )
}

export default Calendar;