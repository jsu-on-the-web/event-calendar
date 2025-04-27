import React from 'react';
import './index.scss';

interface CalendarCellProps {
    assignedDate?: number;
    isSelected: boolean;
    onClick: () => void;
}

/**
 * Calendar Cells are plain boxes of equal size with a small number denoting the day in the top left corner. 
 * 
 * Their date numbers may be optional (e.g for days of the week outside the current month)
 *
 * @param {number} [assignedDate] Optional date number to be displayed in the cell
 */
const CalendarCell = ({ assignedDate, isSelected, onClick}: CalendarCellProps) => {
    return (
        <td 
            className={isSelected ? 'calendar-cell--selected' : 'calendar-cell'}
            onClick={onClick}
            {...(assignedDate !== undefined && { 'data-assigned-date': assignedDate })} // Only set the data attribute if assignedDate is defined
        >
            {assignedDate ? (<span className='calendar-cell__date-number'>{assignedDate}</span>) : <span className='calendar-cell__date-number'></span>}
        </td>
    )
 }

export default CalendarCell;