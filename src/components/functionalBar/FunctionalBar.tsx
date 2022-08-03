import React from 'react'
import ButtonSYS from '../UI/buttonSYS/ButtonSYS'
import classes from './functional.module.scss'

const FunctionalBar = () => {
  return (
    <div className={classes.functionalBar}>
      <ButtonSYS active={true}>Создать заказ</ButtonSYS>
      <ButtonSYS>Принять запчасть</ButtonSYS>
    </div>
  )
}

export default FunctionalBar
