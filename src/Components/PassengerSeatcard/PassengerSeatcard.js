// PassengerSeatCard.js
import React from 'react';
import './PassengerSeatcard.css';

const PassengerSeatCard = ({ passenger, seatNumber }) => {
  
  return (
    <div className='pass-card'>
      <div className="pass">
        <div>{passenger.passengerName}</div>
        <div className="pass-text">{passenger.passengerGender}, Age {passenger.passengerAge}</div>
      </div>
      <div className='pass'>
        <div>Seat Number</div>
        <div className='pass-text'>{seatNumber || 'Not Selected'}</div>
      </div>
    </div>
  );
};

export default PassengerSeatCard;
