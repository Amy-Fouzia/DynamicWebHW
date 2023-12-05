import React from 'react';

const DateComponent = () => {
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleString();

  return (
    <div className="bg-green-500 p-4 rounded-md shadow-md">
      <h2 className="text-white font-bold">Date Component</h2>
      <p className="text-white">Current Date and Time:</p>
      <p className="text-white">{formattedDate}</p>
    </div>
  );
};

export default DateComponent;
