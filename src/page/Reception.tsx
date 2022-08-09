import React from 'react'
import CreatOrder from '../components/creatOrder/CreatOrder'
import FunctionalBar from '../components/functionalBar/FunctionalBar'
import Header from '../components/header/Header'
import DeviceModal from '../components/receptionColum/modal/DeviceModal'
import ReceptionBar from '../components/receptionColum/ReceptionColum'
import { useAppSelector } from '../hooks/redux'
import classes from './reception.module.scss'

const Reception = () => {
  const { visible } = useAppSelector((state) => state.deviceModalReducer)
  const { activeComponent } = useAppSelector(
    (state) => state.functionalBarReducer
  )

  return (
    <div className={classes.reception}>
      <Header />
      <FunctionalBar />
      <div className={classes.body}>
        <div className={classes.left}>
          {activeComponent === 'create' && <CreatOrder />}
        </div>
        <div className={classes.right}>
          <ReceptionBar />
          <ReceptionBar />
        </div>
      </div>
      {visible && <DeviceModal />}
    </div>
  )
}

export default Reception
