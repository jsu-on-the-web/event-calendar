import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

import CalendarCell from '../CalendarCell/index';
import './index.scss';
import { useModal } from '../../contexts/ModalContext';


interface CalendarProps { }

const Calendar = () => {
  const { showModal, openModal } = useModal();
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<number | undefined>(undefined);

  const handleCellClick = (date: number) => { 
    setSelectedDate(date);
    openModal();
  };

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
    // Calculations
    const firstDayOfMonth = new Date(year, month, 1);
    const lastDayOfMonth = new Date(year, month + 1, 0); // The zero-th day of next month is last day of this month
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

    let dayCounter = 1; // Counter through the days of the month

    /**======================
     **      Days
     *========================**/
    for (let i = 0; i < 6; i++) { // Maximum of 6 rows in a calendar
      const row = [];
      for (let j = 0; j < 7; j++) { // 7 days in a week
        if (i === 0 && j < firstDayOfWeek) {
          // Fill empty cells before the first day of the month
          row.push(<CalendarCell key={`empty-row-${i}-day-${j}`} assignedDate={undefined} isSelected={false} onClick={() => { }} />);
        } else if (dayCounter > daysInMonth) {
          // Fill empty cells after the last day of the month
          row.push(<CalendarCell key={`empty-row-${i}-day-${j}`} assignedDate={undefined} isSelected={false} onClick={() => { }} />);
        } else {
          // Fill cells with the days of the month
          const cellsDate = dayCounter; // ! NOTE: Since JS/TS captures variables by reference not value, we need to create a new variable for each cell
          // Makes sure that the cell uses the correct date for each part that needs it. Using dayCounter directly = using the same final value of dayCounter for all cells once the loop ends
          row.push(
            <CalendarCell
              key={cellsDate}
              assignedDate={cellsDate}
              isSelected={selectedDate === cellsDate}
              onClick={() => handleCellClick(cellsDate)}
            />
          );
          dayCounter++;
        }
      }
      calendar.push(<tr key={i} className='calendar__calendar-row'>{row}</tr>);
    }

    return calendar;
  };

  /**--------------------------------------------
   **               Other Functions
   *---------------------------------------------**/
  // Change the selected date when a cell is clicked
  useEffect(() => {
    if (selectedDate) {
      // First remove the selected class from the currently selected cell if present
      const previouslySelectedCell = document.querySelector('.calendar-cell--selected');

      if (previouslySelectedCell) {
        previouslySelectedCell.classList.remove('calendar-cell--selected');
        previouslySelectedCell.classList.add('calendar-cell');
      }

      // Look for the cell with the same date as the selected date
      const selectedCell = document.querySelector(`.calendar-cell[data-assigned-date="${selectedDate}"]`); 
      if (selectedCell) {
        selectedCell.classList.add('calendar-cell--selected');
      }
    }
  }, [selectedDate]);

  // Change month header color when the month changes
  useEffect(() => {
    const header = document.querySelector('.calendar__header');
    const monthNames = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];
    // Use the month name to determine the color, colors are defined in the SCSS file
    if (header) {
      const monthName = monthNames[currentDate.getMonth()];
      header.className = `calendar__header calendar__header--${monthName}`;
      console.log(`Header class changed to calendar__header--${monthName}`);
    }
  }, [currentDate]);

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
                onClick={() => {
                  setSelectedDate(undefined);
                  setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
                }}
              />
              {currentDate.toLocaleString('default', { month: 'long' })} {currentDate.getFullYear()}
              <FontAwesomeIcon
                icon={faAngleRight}
                className="calendar-header__arrow"
                onClick={() => {
                  setSelectedDate(undefined);
                  setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));
                }}
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