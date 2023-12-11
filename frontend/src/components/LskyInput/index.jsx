import React from 'react';
import { FormControl } from 'react-bootstrap';
import './styles.scss';

const Input = (props) => {
  return <FormControl {...props} ref={props.iref}></FormControl>;
};

export default Input;
