import React, { useState } from 'react'
import './TotalPassenger.css'

const TotalPassenger = () => {
  let[count,setCount] = useState(0)

  const decrement = () =>{
    setCount(count - 1);
  }
  const increment = () =>{
    setCount(count + 1);
  }
  return (
  <>
    <div className='first-cont'>
      <span>Passenger 1</span>
      <span>Checked bags</span>
    </div>
    <div className='second-cont'>
      <span>First Person</span>
      <span className='bag-control'>
          <button onClick={decrement}>-</button>
          <span>{count}</span>
          <button onClick={increment}>+</button>
        </span>
    </div>
    </>
  )
}

export default TotalPassenger
