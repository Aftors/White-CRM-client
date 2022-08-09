import React, { FC } from 'react'
import classes from './buttonSYS.module.scss'

interface ButtonProps {
  children?: React.ReactNode
  active?: boolean
  id?: string
  color?: ColorVar
  onClick?: () => void
}

interface CSSType {
  [key: string]: string
}

export enum ColorVar {
  black = 'black',
  white = 'white',
  gray = 'gray',
}

const ButtonSYS: FC<ButtonProps> = ({
  children,
  active,
  id,
  onClick,
  color = classes.butonGray,
}) => {
  const colors: CSSType = {
    black: classes.buttonBlack,
    white: classes.buttonWhite,
    gray: classes.buttonGray,
  }

  return (
    <button
      id={id}
      className={
        active
          ? `${classes.button}  ${classes.active}`
          : `${classes.button} ${colors[color]}`
      }
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default ButtonSYS
