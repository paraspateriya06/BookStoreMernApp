import React from 'react';

const Spinner = () => {
  return (
    <div className="flex justify-center items-center min-h-[200px]">
      <div className="animate-ping w-16 h-16 rounded-full bg-sky-700" />
    </div>
  );
};

export default Spinner;
