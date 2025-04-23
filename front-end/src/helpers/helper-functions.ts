

/* -------------------------------------------------------------------------- */
/*                               Date Functions                               */
/* -------------------------------------------------------------------------- */

export const getCurrentDate = () => {
    const date = new Date();
    return date.toLocaleDateString('en-AU', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
    });
}

export const getCurrentTime = () => {
    const date = new Date();
    return date.toLocaleTimeString('en-AU', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
    });
}

export const calculateTimeDifference = (startDate: Date, endDate: Date) => {
    const output = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    }
    const totalSeconds = Math.floor((endDate.getTime() - startDate.getTime()) / 1000);
    output.seconds = totalSeconds % 60;
    const totalMinutes = Math.floor(totalSeconds / 60);
    output.minutes = totalMinutes % 60;
    const totalHours = Math.floor(totalMinutes / 60);
    output.hours = totalHours % 24;
    output.days = Math.floor(totalHours / 24);
    return output;
}