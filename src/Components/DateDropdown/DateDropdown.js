import React, { useState, useEffect, useRef } from 'react';
import { DatePicker, Radio, Button } from 'antd';
import './DateDropdown.css';
import calendarIcon from '../../images/Calendar.png';
import dayjs from 'dayjs';
import { useDispatch } from 'react-redux';
import { setDate } from '../../Store/flightSlice';

const { RangePicker } = DatePicker;

const DateDropdown = () => {
  const dispatch = useDispatch();
  const [tripType, setTripType] = useState('round');
  const [departDate, setDepartDate] = useState(null);
  const [returnDate, setReturnDate] = useState(null);
  const [oneWayDate, setOneWayDate] = useState(null);
  const [selectedDates, setSelectedDates] = useState(null);
  const [open, setOpen] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(dayjs());

  const wrapperRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target) &&
        !event.target.closest('.ant-picker-panel')
      ) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const formatDate = (date) => (date ? dayjs(date).format('MMM D') : '');

  const formattedInputLabel = () => {
    if (tripType === 'round') {
      return `${formatDate(departDate) || 'Depart'} - ${formatDate(returnDate) || 'Return'}`;
    }
    if (tripType === 'one') {
      return `${formatDate(oneWayDate) || 'Depart'}`;
    }
    return 'Depart - Return';
  };

  const handleDone = () => {
    if (tripType === 'round') {
      setSelectedDates([departDate, returnDate]);
      dispatch(setDate({ type: 'round', depart: departDate, return: returnDate })); // ✅ Redux update
    } else {
      setSelectedDates(oneWayDate);
      dispatch(setDate({ type: 'one', depart: oneWayDate })); // ✅ Redux update
    }
    setOpen(false);
  };

  const isDoneDisabled =
    (tripType === 'round' && (!departDate || !returnDate)) ||
    (tripType === 'one' && !oneWayDate);

  const disabledDateForReturn = (current) => {
    return current && departDate && current.isBefore(departDate, 'day');
  };

  const handleToggleOpen = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div className="date-dropdown-wrapper" ref={wrapperRef}>
      <div className={`date-box ${open ? 'active' : ''}`} onClick={handleToggleOpen}>
        <img src={calendarIcon} alt="calendar" className="calendar-icon" />
        {formattedInputLabel()}
      </div>

      {open && (
        <div className="calendar-panel">
          <div className="top-row">
            <Radio.Group
              value={tripType}
              onChange={(e) => {
                const selected = e.target.value;
                setTripType(selected);
                setDepartDate(null);
                setReturnDate(null);
                setOneWayDate(null);
                setSelectedDates(null);
              }}
            >
              <Radio value="one">One way</Radio>
              <Radio value="round">Round trip</Radio>
            </Radio.Group>

            <div className="input-preview">
              <img src={calendarIcon} alt="calendar" className="calendar-icon" />
              <span>
                {tripType === 'round'
                  ? `${formatDate(departDate) || 'Depart'} - ${formatDate(returnDate) || 'Return'}`
                  : `${formatDate(oneWayDate) || 'Depart'}`}
              </span>
            </div>

            <Button
              type="primary"
              className="done-btn"
              onClick={handleDone}
              disabled={isDoneDisabled}
            >
              Done
            </Button>
          </div>

          {tripType === 'round' ? (
            <div className="dual-calendars">
              <DatePicker
                value={departDate}
                onChange={(val) => {
                  setDepartDate(val);
                  if (val) setCurrentMonth(dayjs(val));
                }}
                format="MMM D"
                allowClear={false}
                className="calendar"
                defaultPickerValue={currentMonth}
              />
              <DatePicker
                value={returnDate}
                onChange={(val) => setReturnDate(val)}
                format="MMM D"
                allowClear={false}
                className="calendar"
                disabledDate={disabledDateForReturn}
                defaultPickerValue={currentMonth}
              />
            </div>
          ) : (
            <DatePicker
              value={oneWayDate}
              onChange={(val) => setOneWayDate(val)}
              format="MMM D"
              allowClear={false}
              className="calendar"
              defaultPickerValue={currentMonth}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default DateDropdown;
