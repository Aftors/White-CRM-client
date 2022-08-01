import React from 'react'
import CreatOrder from '../components/creatOrder/CreatOrder'
import classes from './reception.module.scss'

const Reception = () => {
  return (
    <div className={classes.reception}>
      <CreatOrder />
    </div>
  )
}

export default Reception
