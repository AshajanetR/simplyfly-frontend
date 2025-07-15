import React from 'react';
import { Select } from 'antd';
import './FromDropdown.css';
import planeIcon from '../../images/FromAirplane.png';
import { useDispatch } from 'react-redux';
import { setFrom } from '../../Store/flightSlice';
const { Option } = Select;

const airports = ['Pune','Chennai', 'ATL', 'STL', 'PVG', 'JFK', 'Label', 'Label', 'Label'];

const FromDropdown = () => {
  const dispatch = useDispatch();
  const customPlaceholder = (
    <span className="custom-placeholder">
      <img src={planeIcon} alt="plane icon" className="plane-icon" />
      From where?
    </span>
  );

  return (
    <div className="flight-dropdown-wrapper">
      <Select
        placeholder={customPlaceholder}
        suffixIcon={null}
        className="flight-dropdown"
        popupClassName="custom-dropdown"
        getPopupContainer={(triggerNode) => triggerNode.parentNode} 
        dropdownAlign={{ points: ['tl', 'bl'], offset: [50, 4] }} 
        allowClear={false}
        onChange={(value) => dispatch(setFrom(value))}
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
