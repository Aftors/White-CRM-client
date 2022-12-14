import React, { FC } from 'react'
import classes from './buttonR15.module.scss'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode
  active?: boolean
  id?: string
  color?: ColorVar
  onClick: () => void
}

interface CSSType {
  [key: string]: string
}

export enum ColorVar {
  black = 'black',
  white = 'white',
  gray = 'gray',
  purple = 'purple',
}

const ButtonR15: FC<ButtonProps> = ({
  children,
  active,
  id,
  onClick,
  color = 'default',
}) => {
  const colors: CSSType = {
    default: classes.buttonDefault,
    purple: classes.purple,
  }

  return (
    <button
      id={id}
      onClick={onClick}
      className={
        active
          ? `${classes.button}  ${classes.active}`
          : `${classes.button} ${colors[color]}`
      }
    >
      {children}
    </button>
  )
}

export default ButtonR15
