import React, { FC } from 'react'
import classes from './inputOrder.module.scss'

interface inputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  children?: React.ReactNode
  type: string
  placeholder?: string
  disable?: boolean
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const InputOrder: FC<inputProps> = ({
  type,
  disable,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <input
      className={
        disable ? `${classes.input}  ${classes.disable}` : `${classes.input}`
      }
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    ></input>
  )
}

export default InputOrder
