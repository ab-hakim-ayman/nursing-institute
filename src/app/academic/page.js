import React from 'react';
import Calender from '@/components/Academic/Calender/Calender';
import UpComingEvents from '@/components/Academic/UpComingEvents/UpComingEvents';
import Shifts from '@/components/Shifts/Shifts';

const Academic = () => {
  return (
    <div>
      <Shifts />
      <Calender />
      <UpComingEvents />
    </div>
  );
};

export default Academic;