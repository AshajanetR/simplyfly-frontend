import React, { useState } from 'react';
import { Alert } from 'antd';
import './BookingAlert.css';

const BookingAlert = ({transactionId}) => {
  const [visible, setVisible] = useState(true);

  return (
    visible && (
      <Alert
        message={
          <>
            Your flight has been booked successfully! Your confirmation number is{' '}
            <strong>#{transactionId}</strong>
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
