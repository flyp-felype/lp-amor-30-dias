import React from 'react';
import {Input} from './styles';

function InputText({id, label, type, style, value, onChange}) {
  return (
    <Input
      id={id}
      label={label}
      type={type}
      placeholder={label}
      style={style}
      value={value}
      onChange={onChange}
    />
  );
}

export default InputText;
