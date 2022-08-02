import React from 'react'
import CreatOrder from '../components/creatOrder/CreatOrder'
import FunctionalBar from '../components/functionalBar/FunctionalBar'
import Header from '../components/header/Header'
import ReceptionBar from '../components/receptionColum/ReceptionColum'
import classes from './reception.module.scss'

const Reception = () => {
  return (
    <div className={classes.reception}>
      <Header />
      <FunctionalBar />
      <div className={classes.body}>
        <div className={classes.left}>
          <CreatOrder />
        </div>
        <div className={classes.right}>
          <ReceptionBar />
          <ReceptionBar />
        </div>
      </div>
    </div>
  )
}

export default Reception
