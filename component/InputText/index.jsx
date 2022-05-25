import React from 'react';
import {Input} from './styles';

function InputText({id, label, type, style}) {
  return (
    <Input
      id={id}
      label={label}
      type={type}
      placeholder={label}
      style={style}
    />
  );
}

export default InputText;
