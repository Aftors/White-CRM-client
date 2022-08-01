import React, { FC } from 'react'
import classes from './buttonStatus.module.scss'

interface ButtonProps {
  children?: React.ReactChild | React.ReactNode
  active?: boolean
  id?: string
  color?: ButtonColor
}

interface CSSType {
  [key: string]: string
}

export enum ButtonColor {
  green = 'green',
  red = 'red',
  blue = 'blue',
  orange = 'orange',
  purple = 'purple',
  ocean = 'ocean',
}

const ButtonStatus: FC<ButtonProps> = ({
  children,
  active,
  id,
  color = classes.butonGray,
}) => {
  const colors: CSSType = {
    green: classes.buttonGreen,
    red: classes.buttonRed,
    blue: classes.buttonBlue,
    orange: classes.buttonOrange,
    purple: classes.buttonPurple,
    ocean: classes.buttonOcean,
  }

  return (
    <button
      id={id}
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

export default ButtonStatus
