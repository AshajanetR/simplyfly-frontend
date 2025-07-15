import React from 'react';
import { Select } from 'antd';
import './ToDropdown.css';
import planeIcon from '../../images/ToAirplane.png';
import { useDispatch } from 'react-redux';
import { setTo } from '../../Store/flightSlice';
const { Option } = Select;

const airports = ['Italy','Mumbai', 'Goa', 'STL', 'PVG', 'JFK', 'Label', 'Label', 'Label'];

const ToDropdown = () => {
  const dispatch = useDispatch();
  const customPlaceholder = (
    <span className="custom-placeholder">
      <img src={planeIcon} alt="plane icon" className="plane-icon" />
      To where?
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
        onChange={(value) => dispatch(setTo(value))}
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
