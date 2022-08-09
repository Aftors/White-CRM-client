import React from 'react'
import classes from './header.module.scss'
import InputSearch from '../UI/inputSearch/InputSearch'
import ButtonSYS from '../UI/buttonSYS/ButtonSYS'

const Header = () => {
  return (
    <div className={classes.header}>
      <InputSearch />
      <ButtonSYS id={classes.auth}>Войти</ButtonSYS>
    </div>
  )
}

export default Header
