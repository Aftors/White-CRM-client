import React from 'react'
import classes from './order.module.scss'

const Order = () => {
  return (
    <div className={classes.order}>
      <div className={classes.header}>
        <span className={classes.orderNum}>№1356</span>
        <span className={classes.status}>Согласовать</span>
      </div>
      <div className={classes.body}>
        <span className={classes.deviceModel}>Apple - A1466</span>
        <span className={classes.description}>
          Залит - не видит зарядку, временами морагает изображение.
        </span>
      </div>
      <div className={classes.footer}>
        <span className={classes.cash}>Итого: 7500₽</span>
        <span className={classes.date}>23.07.2022</span>
      </div>
    </div>
  )
}

export default Order
