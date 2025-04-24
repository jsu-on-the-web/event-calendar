import React, { useState } from 'react';
import CalendarCell from '../CalendarCell/index';

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
    const lastDayOfWeek = lastDayOfMonth.getDay();
    const calendar = [];
    const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const dayNamesRow = (
      <tr key="day-names">
        {dayNames.map((dayName, index) => (
          <th key={index} className="calendar-header__day-name">
            {dayName}
          </th>
        ))}
      </tr>
    );
    calendar.push(dayNamesRow);
    let dayCounter = 1;
    // Fill in the first row with empty cells until the first day of the month
    const firstRow = [];
    for (let i = 0; i < firstDayOfWeek; i++) {
      firstRow.push(<td key={i} className="calendar-cell"></td>);
    }
    // Fill in the rest of the first row with the days of the month
    for (let i = firstDayOfWeek; i < 7; i++) {
      if (dayCounter > daysInMonth) break;
      firstRow.push(
        <CalendarCell
          key={dayCounter}
          date={new Date(year, month, dayCounter)}
          isSelected={selectedDate?.getDate() === dayCounter}
          onClick={() => setSelectedDate(new Date(year, month, dayCounter))}
        />
      );
      dayCounter++;
    }
  };

  return (
    <div className="calendar">
      {/* Header with the current month and year, as well as arrows for moving back and forwards through the calendar */}
      <table>

      </table>
    </div>
  )
}

export default Calendar;