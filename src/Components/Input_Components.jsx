import { TextField } from '@mui/material'
import React from 'react'

const Input_Component = (props) => {
  const { placeholder, required, onChange, id, type } = props
  return (
    <TextField
      sx={{ mt: 2, width: '100%' }}
      placeholder={placeholder}
      required={required}
      onChange={onChange}
      id={id}
      type={type}
    />
  )
}
export default Input_Component
