import React from 'react'

const Montreal = () => {
  const [time, setTime] = React.useState('');

  React.useEffect(() => {
    const updateMontrealTime = () => {
      const montrealTime = new Date().toLocaleTimeString('en-GB', {
        timeZone: 'America/Montreal',
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      });
      setTime(montrealTime);
    };

    updateMontrealTime();
    const timerId = setInterval(updateMontrealTime, 1000);

    return () => clearInterval(timerId);
  }, []);

  return (
    <div className="flex items-center">
      <span className="me-4 select-none">
        <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" stroke="white" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="16" cy="16" r="14" />
            <ellipse cx="16" cy="16" rx="7" ry="14" />
            <ellipse cx="16" cy="16" rx="14" ry="7" />
          </g>
        </svg>
      </span>
      MONTREAL_<span className="select-none">{time || "00:00:00"}</span>
    </div>
  );
}

export default Montreal;
