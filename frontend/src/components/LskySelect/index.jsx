import React from 'react';
import FormSelect from 'react-bootstrap/FormSelect';
const Select = (props) => {
  return (
    <FormSelect
      onChange={props.onDropDwnChange}
      value={props.defaultValue}
      disabled={props.disabled}
      name={props.name}
      isInvalid={props.isInvalid}
    >
      <option key="">{props.defaultOption}</option>
      {props.options &&
        props.options.length > 0 &&
        props.options.map((optionData, index) => (
          <option value={optionData[props.value]} key={index}>
            {optionData[props.textField]}
          </option>
        ))}
    </FormSelect>
  );
};
export default Select;
