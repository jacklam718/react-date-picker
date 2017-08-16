import React from 'react';
import Calendar from './Calendar';
import CalendarActionButtons from './CalendarActionButtons';

const styles = {
  container: {
    // height: '300px',
    width: '400px',
    backgroundColor: '#444B53',
    borderRadius: '5px',
  },
};

export default function DatePicker() {
  return (
    <div style={styles.container}>
      <Calendar />
      <CalendarActionButtons />
    </div>
  );
}
