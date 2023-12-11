import React from 'react';
import Datetime from 'react-datetime';
import moment from 'moment';
import 'react-datetime/css/react-datetime.css';
import './styles.scss';

const LskyDatePicker = (props) => {
  //process the picker value for give time and date formats
  const getDatePickerValue = () => {
    if (props.value) {
      if (props.dateFormat && props.timeFormat) {
        return moment(props.value).format('DD-MMM-YYYY hh:mm a');
      } else if (props.dateFormat && !props.timeFormat) {
        return moment(props.value).format('DD-MMM-YYYY');
      } else if (!props.dateFormat && props.timeFormat) {
        return moment(props.value).format('hh:mm a');
      } else {
        return moment(props.value).format('DD-MMM-YYYY');
      }
    } else {
      return '';
    }
  };
  // Default Date format "DD-MMM-YYYY" pass "dateFormat" as prop for only date
  // Time format example for 12 hours time for am&pm add 'hh mm a' pass "timeFormat" as prop for only time
  // By default a date string will be return if no "dateFormat" or "timeFormat" passed
  return (
    <Datetime
      isValidDate={props.isValidDate}
      className="date-picker"
      inputProps={{
        placeholder: props?.placeholder,
        value: getDatePickerValue()
      }}
      timeFormat={props?.timeFormat ? 'hh mm a' : false}
      defaultValue={props.value}
      selected={props.selected}
      dateFormat={!props?.timeFormat ? 'DD-MMM-YYYY' : false}
      onChange={props.onChange}
      disabled={props.disabled}
      initialViewDate={
        props.initialViewDate ? moment(props.initialViewDate) : ''
      }
      closeOnSelect={true}
    />
  );
};

export default LskyDatePicker;
