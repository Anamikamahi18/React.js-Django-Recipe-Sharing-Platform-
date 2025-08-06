import React from 'react';
import './InputField.css';

const InputField = ({
     label, type, name, value, onChange, ...rest }) => (
        <div className="mb-3">
            <label htmlFor={name} className="form-label input-label">{label}</label>
            <input
              id={name}
              name={name}
              type={type}
              value={value}
              onChange={onChange}
              className="form-control input-custom"
              {...rest}
              />
        </div>
     );

export default InputField;     
