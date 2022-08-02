import React from 'react'
import { Link } from 'react-router-dom'
import classes from './navigation.module.scss'

const Navigation = () => {
  return (
    <div className={classes.conteiner}>
      <h3>Навигация</h3>
      <Link to="/reception" className={classes.item}>
        <i></i>
        <span className={classes.body}>Приемка</span>
      </Link>
      <Link to="/orders" className={`${classes.item} + ${classes.activ}`}>
        <i></i>
        <span className={classes.body}>Заказы</span>
        <span className={classes.counter}>41</span>
      </Link>
      <Link to="/cash" className={classes.item}>
        <i></i>
        <span className={classes.body}>Касса</span>
        <span className={classes.cash}>+12500₽</span>
      </Link>
      <Link to="/reports" className={classes.item}>
        <i></i>
        <span className={classes.body}>Отчеты</span>
      </Link>
      <Link to="/stock" className={classes.item}>
        <i></i>
        <span className={classes.body}>Склад</span>
      </Link>
    </div>
  )
}

export default Navigation
