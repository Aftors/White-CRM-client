import React, { FC } from 'react'
import classes from './buttonSYS.module.scss'

interface ButtonProps extends React.InputHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode
  active?: boolean
  id?: string
  name?: string
  color?: ColorVar
  onClick?: (e: React.MouseEvent) => void
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
  name,
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
      name={name}
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
