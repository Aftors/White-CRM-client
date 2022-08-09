import React from 'react'
import classes from './statusBar.module.scss'
import ButtonStatus, { ButtonColor } from '../UI/buttonStatus/ButtonStatus'
import ButtonSYS from '../UI/buttonSYS/ButtonSYS'

const StatusBar = () => {
  return (
    <div className={classes.statusBar}>
      <ButtonSYS active={true}>Все заказы</ButtonSYS>
      <ButtonSYS>Мои заказы</ButtonSYS>
      <ButtonStatus color={ButtonColor.green}>Новые</ButtonStatus>
      <ButtonStatus color={ButtonColor.blue}>В работе</ButtonStatus>
      <ButtonStatus color={ButtonColor.orange}>Согласование</ButtonStatus>
      <ButtonStatus color={ButtonColor.purple}>Согласован</ButtonStatus>
      <ButtonStatus color={ButtonColor.red}>Отказ</ButtonStatus>
    </div>
  )
}

export default StatusBar
