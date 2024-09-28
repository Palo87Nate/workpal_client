import React, { useState } from 'react';
import { TextField, Select, MenuItem, FormControl, InputLabel, Button, Checkbox, FormControlLabel, FormGroup } from '@mui/material';

const Form = ({ fields, onSubmit, buttonLabel = 'Submit' }) => {
  const [formData, setFormData] = useState({});

  const handleChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await onSubmit(formData); // Call the service function passed as a prop
      console.log('Form submitted successfully');
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {fields.map((field, index) => {
        switch (field.type) {
          case 'text':
            return (
              <TextField
                key={index}
                label={field.label}
                variant="outlined"
                fullWidth
                margin="normal"
                value={formData[field.name] || ''}
                onChange={(e) => handleChange(field.name, e.target.value)}
                required={field.required}
              />
            );
          case 'select':
            return (
              <FormControl fullWidth margin="normal" key={index}>
                <InputLabel>{field.label}</InputLabel>
                <Select
                  value={formData[field.name] || ''}
                  onChange={(e) => handleChange(field.name, e.target.value)}
                  required={field.required}
                >
                  {field.options.map((option, idx) => (
                    <MenuItem key={idx} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            );
          case 'checkbox':
            return (
              <FormGroup key={index}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={formData[field.name] || false}
                      onChange={(e) => handleChange(field.name, e.target.checked)}
                    />
                  }
                  label={field.label}
                />
              </FormGroup>
            );
          default:
            return null;
        }
      })}
      <Button type="submit" variant="contained" color="primary">
        {buttonLabel}
      </Button>
    </form>
  );
};

export default Form;
