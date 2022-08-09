import React, { FC } from 'react'
import { useAppDispatch } from '../../../hooks/redux'
import { deviceModalSlice } from '../../../store/reducers/modal/DeviceModalSlice'
import classes from './deviceModal.module.scss'

const DeviceModal: FC = () => {
  const { visibleOff } = deviceModalSlice.actions
  const dispatch = useAppDispatch()

  return (
    <div onClick={() => dispatch(visibleOff())} className={classes.modal}>
      deviceModal
    </div>
  )
}

export default DeviceModal
