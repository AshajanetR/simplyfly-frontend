import React from 'react'
import "./PassengerSeatcard.css"
const PassengerSeatcard = () => {
  return (
    <div className='pass-card'>
          <div className="pass">
              <div>Passenger 1</div>
              <div className="pass-text">ABC</div>
          </div>
          <div className='pass'>
             <div>Seat Number</div>
             <div className='pass-text'>6F</div>
          </div>
    </div>
  )
}

export default PassengerSeatcard;