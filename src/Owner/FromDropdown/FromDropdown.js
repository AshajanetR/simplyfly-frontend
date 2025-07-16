import React from 'react';
import { Select } from 'antd';
import './FromDropdown.css';
import planeIcon from '../../images/FromAirplane.png';

const { Option } = Select;
const airports = ['Chennai', 'Pune', 'Mumbai', 'Delhi', 'JFK'];

const FromDropdown = ({ value, onChange }) => {
  const customPlaceholder = (
    <span className="custom-placeholder">
      <img src={planeIcon} alt="plane icon" className="plane-icon" />
      From where?
    </span>
  );

  return (
    <div className="flight-dropdown-wrapper">
      <Select
        value={value || undefined}
        placeholder={customPlaceholder}
        suffixIcon={null}
        className="flight-dropdown"
        popupClassName="custom-dropdown"
        onChange={onChange}
      >
        {airports.map((code, index) => (
          <Option key={index} value={code}>
            {code}
          </Option>
        ))}
      </Select>
    </div>
  );
};

export default FromDropdown;
