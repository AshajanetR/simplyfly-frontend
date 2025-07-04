import React, { useState, useRef, useEffect } from 'react';
import { Button } from 'antd';
import { PlusOutlined, MinusOutlined } from '@ant-design/icons';
import './AdultDropdown.css';
import personIcon from '../../images/Person.png'; 

const AdultDropdown = () => {
  const [adults, setAdults] = useState(1);
  const [minors, setMinors] = useState(0);
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleOutsideClick = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  const label = `${adults} Adult${adults > 1 ? 's' : ''}${minors > 0 ? `, ${minors} Minor${minors > 1 ? 's' : ''}` : ''}`;

  return (
    <div className="passenger-dropdown-wrapper" ref={dropdownRef}>
      <div className={`passenger-box ${open ? 'active' : ''}`} onClick={() => setOpen(!open)}>
        <img src={personIcon} alt="person" className="passenger-icon" />
        {label}
      </div>

      {open && (
        <div className="passenger-panel">
          <div className="row">
            <span>Adults:</span>
            <div className="control-buttons">
              <Button
                icon={<MinusOutlined />}
                onClick={() => setAdults(Math.max(1, adults - 1))}
                size="small"
                className="count-btn"
              />
              <span>{adults}</span>
              <Button
                icon={<PlusOutlined />}
                onClick={() => setAdults(adults + 1)}
                size="small"
                className="count-btn"
              />
            </div>
          </div>
          <div className="row">
            <span>Minors:</span>
            <div className="control-buttons">
              <Button
                icon={<MinusOutlined />}
                onClick={() => setMinors(Math.max(0, minors - 1))}
                size="small"
                className="count-btn"
              />
              <span>{minors}</span>
              <Button
                icon={<PlusOutlined />}
                onClick={() => setMinors(minors + 1)}
                size="small"
                className="count-btn"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdultDropdown;
