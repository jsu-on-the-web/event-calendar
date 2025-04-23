import React, { useState } from 'react';

interface CalendarProps { }

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  /* -------------------------------------------------------------------------- */
  /*                           Constructors/Generators                          */
  /* -------------------------------------------------------------------------- */

  return (
    <div className="calendar">
    </div>
  )
}

export default Calendar;