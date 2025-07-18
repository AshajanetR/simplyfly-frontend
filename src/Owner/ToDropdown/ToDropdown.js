import React from 'react';
import { Select } from 'antd';
import './ToDropdown.css';
import planeIcon from '../../images/ToAirplane.png';

const { Option } = Select;
const airports = ['Mumbai', 'Goa', 'Pune', 'Delhi', 'Coimbatore'];

const ToDropdown = ({ value, onChange }) => {
  const customPlaceholder = (
    <span className="custom-placeholder">
      <img src={planeIcon} alt="plane icon" className="plane-icon" />
      To where?
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

export default ToDropdown;
