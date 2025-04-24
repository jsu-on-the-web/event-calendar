import React from 'react';
import './index.css';

interface CalendarCellProps {
    key: number;
    assignedDate?: number;
    isSelected: boolean;
    onClick: () => void;
}

/**
 * Calendar Cells are plain boxes of equal size with a small number denoting the day in the top left corner. 
 * 
 * Their date numbers may be optional (e.g for days of the week outside the current month)
 *
 * @param {number} key Identifier for the cell
 * @param {?number} [assignedDate] Optional date number to be displayed in the cell
 */
const CalendarCell = ({key, assignedDate, isSelected, onClick}: CalendarCellProps) => {
    return (
        <td key={key}
            className={isSelected ? 'calendar-cell--selected' : 'calendar-cell'}
            onClick={onClick}
        >
            {assignedDate ? (<span className='calendar-cell__date-number'>{assignedDate}</span>) : null}
        </td>
    )
 }

export default CalendarCell;