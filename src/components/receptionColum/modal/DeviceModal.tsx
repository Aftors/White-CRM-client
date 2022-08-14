import React, { FC } from 'react'
import { useAppDispatch } from '../../../hooks/redux'
import { IFabricator } from '../../../models/IFabricator'
import { fabricatorAPI } from '../../../service/FabricatorService'
import { deviceModalSlice } from '../../../store/reducers/modal/DeviceModalSlice'
import { CreateOrderSlice } from '../../../store/reducers/order/CreateOrderSlice'
import classes from './deviceModal.module.scss'

const DeviceModal: FC = () => {
  const { visibleOff } = deviceModalSlice.actions
  const dispatch = useAppDispatch()

  const { data: fabricator } = fabricatorAPI.useFetchAllFabricatorQuery('')
  const { deviceModel } = CreateOrderSlice.actions

  function deviceEvent(name: string) {
    dispatch(deviceModel(name))
    dispatch(visibleOff())
  }

  return (
    <div onClick={() => dispatch(visibleOff())} className={classes.modal}>
      <div className={classes.container} onClick={(e) => e.stopPropagation()}>
        <div className={classes.header}>
          <h2>Устройства</h2>
        </div>
        <div className={classes.body}>
          {fabricator?.map((fabricator: IFabricator) => (
            <ul key={fabricator.id} className={classes.fabricator}>
              <h2>{fabricator.fabricator}</h2>
              {fabricator.devices.map((device) => (
                <div key={device.id} className={classes.deviceConteiner}>
                  <li
                    className={classes.device}
                    onClick={() => deviceEvent(device.deviceModel)}
                  >
                    {device.deviceModel}
                  </li>
                </div>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </div>
  )
}

export default DeviceModal
