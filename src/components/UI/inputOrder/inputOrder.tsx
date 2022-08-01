import React, { FC } from 'react'
import classes from './inputOrder.module.scss'

interface inputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  children?: React.ReactChild | React.ReactNode
  type: string
  placeholder?: string
  disable?: boolean
}

const InputOrder: FC<inputProps> = ({ type, disable, placeholder }) => {
  return (
    <input
      className={
        disable ? `${classes.input}  ${classes.disable}` : `${classes.input}`
      }
      type={type}
      placeholder={placeholder}
    ></input>
  )
}

export default InputOrder
