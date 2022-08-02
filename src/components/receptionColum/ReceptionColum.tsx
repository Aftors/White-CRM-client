import React from 'react'
import Filter from './filter/Filter'
import Order from './order/Order'
import classes from './receptionColum.module.scss'

const ReceptionBar = () => {
  return (
    <div className={classes.receptionBar}>
      <Filter />
      <Order />
      <Order />
    </div>
  )
}

export default ReceptionBar
