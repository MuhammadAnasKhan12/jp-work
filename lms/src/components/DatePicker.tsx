import { useState } from 'react';

type DatePickerProps = {
    selectedDate: string;
    onChange: (date: string) => void;
  }
  
  function DatePicker(props: DatePickerProps) {
    const { selectedDate, onChange }=props
    const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      onChange(event.target.value);
    };
  
    return (
      <input
        type="date"
        value={selectedDate}
        onChange={handleDateChange}
      />
    );
  };
  
  export default DatePicker;