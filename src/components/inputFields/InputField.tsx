import React, { ChangeEvent } from 'react';
import TextField from '@mui/material/TextField';
import { InputAdornment, Typography } from '@mui/material';
import '../../styles/projectForm.css'

interface InputFieldProps {
  label: string;
  value: string | number;
  error?: boolean;
  helperText?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  disabled?: boolean;
  multiline?: boolean;
  price?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  value,
  error = false,
  helperText = '',
  onChange,
  type = 'text',
  disabled = false,
  multiline = false,
  price = false,
}) => {
  return (
    <div className='input-field'>
      <Typography className='input-label'>{label} <span style={{ color: 'red' }}>*</span></Typography>
      <TextField
        className='text-field'
        id={label}
        value={value}
        error={error}
        onChange={onChange}
        placeholder={`Enter ${label}`}
        helperText={helperText}
        type={type}
        disabled={disabled}
        required
        fullWidth
        variant="outlined"
        margin='none'
        multiline={multiline}
        rows={multiline ? 4 : 1}
        slotProps={{
          input: {
            startAdornment: price ? <InputAdornment position="start">LKR</InputAdornment> : null,
          },
        }}
      >
      </TextField>
    </div>
  );
};

export default InputField;
