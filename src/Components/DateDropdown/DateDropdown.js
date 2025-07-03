import React, { useState } from 'react';
import { DatePicker, Radio, Button } from 'antd';
import './DateDropdown.css';
import calendarIcon from '../../images/Calendar.png';

const { RangePicker } = DatePicker;

const DateDropdown = () => {
  const [tripType, setTripType] = useState('round');
  const [dates, setDates] = useState([]);
  const [showCalendar, setShowCalendar] = useState(false);

  const formatDate = (date) => (date ? date.format('MMM D') : '');

  const formattedLabel =
    dates.length === 2
      ? `${formatDate(dates[0])} - ${formatDate(dates[1])}`
      : 'Depart - Return';

  return (
    <div className="date-dropdown-wrapper">
      {/* Clickable Box to Toggle Calendar */}
      <div className="date-box" onClick={() => setShowCalendar(!showCalendar)}>
        <img src={calendarIcon} alt="calendar" className="calendar-icon" />
        {formattedLabel}
      </div>

      {/* Full Panel Appears Inline */}
      {showCalendar && (
        <div className="calendar-full-panel">
          <div className="calendar-header">
            <Radio.Group
              value={tripType}
              onChange={(e) => {
                const selected = e.target.value;
                setTripType(selected);
                if (selected === 'one') setDates([]);
              }}
            >
              <Radio value="round">Round trip</Radio>
              <Radio value="one">One way</Radio>
            </Radio.Group>

            <div className="input-preview">
              <img src={calendarIcon} alt="calendar" className="calendar-icon" />
              <span>{formattedLabel}</span>
            </div>

            <Button
              type="primary"
              className="done-btn"
              onClick={() => setShowCalendar(false)}
            >
              Done
            </Button>
          </div>

          {/* Calendar Picker (inside same box) */}
          <div className="inline-calendar">
            <RangePicker
              allowClear={false}
              value={dates}
              onChange={(val) => setDates(val || [])}
              format="MMM D"
              open
              className="hidden-range"
              dropdownClassName="remove-popup"
              panelRender={(panel) => panel}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default DateDropdown;
