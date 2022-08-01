import React from 'react'
import classes from './header.module.scss'
import InputSearch from '../UI/inputSearch/InputSearch'
import ButtonStatus, { ButtonColor } from '../UI/buttonStatus/ButtonStatus'
import ButtonSYS from '../UI/buttonSYS/ButtonSYS'

const Header = () => {
  return (
    <div className={classes.header}>
      <InputSearch />
      <ButtonSYS active={true}>Все заказы</ButtonSYS>
      <ButtonSYS>Мои заказы</ButtonSYS>
      <ButtonStatus color={ButtonColor.green}>Новые</ButtonStatus>
      <ButtonStatus color={ButtonColor.blue}>В работе</ButtonStatus>
      <ButtonStatus color={ButtonColor.orange}>Согласование</ButtonStatus>
      <ButtonStatus color={ButtonColor.purple}>Согласован</ButtonStatus>
      <ButtonStatus color={ButtonColor.red}>Отказ</ButtonStatus>
      <ButtonSYS id={classes.auth}>Войти</ButtonSYS>
    </div>
  )
}

export default Header
