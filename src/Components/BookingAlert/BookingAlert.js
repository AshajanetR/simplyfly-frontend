import React, { useState } from 'react';
import { Alert } from 'antd';
import './BookingAlert.css';

const BookingAlert = () => {
  const [visible, setVisible] = useState(true);

  return (
    visible && (
      <Alert
        message={
          <>
            Your flight has been booked successfully! Your confirmation number is{' '}
            <strong>#381029404387</strong>
          </>
        }
        type="success"
        closable
        onClose={() => setVisible(false)}
        className="custom-alert"
      />
    )
  );
};

export default BookingAlert;
