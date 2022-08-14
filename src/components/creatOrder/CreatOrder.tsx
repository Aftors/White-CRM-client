import React from 'react'
import classes from './creatOrder.module.scss'
import ButtonSYS from '../UI/buttonSYS/ButtonSYS'
import ButtonR15, { ColorVar } from '../UI/buttonR15/ButtonR15'
import InputOrder from '../UI/inputOrder/inputOrder'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { deviceModalSlice } from '../../store/reducers/modal/DeviceModalSlice'
import LegalEntity from './legalEntity/LegalEntity'
import { CreateOrderSlice } from '../../store/reducers/order/CreateOrderSlice'
import { orderAPI } from '../../service/OrderService'

const CreatOrder = () => {
  const {
    name,
    lastName,
    prePayment,
    prePrice,
    phoneNum,
    deviceSN,
    deviceModel,
    descriptionDamage,
    descriptionDevice,
  } = useAppSelector((state) => state.createOrderReducer)
  const { visibleOn } = deviceModalSlice.actions
  const {
    nameBind,
    lastNameBind,
    prePaymentBind,
    prePriceBind,
    phoneNumBind,
    deviceSNBind,
    descriptionDamageBind,
    descriptionDeviceBind,
  } = CreateOrderSlice.actions
  const dispatch = useAppDispatch()

  const stateForm = useAppSelector((state) => state.createOrderReducer)
  const [createOrder, { isLoading }] = orderAPI.useCreateOrderMutation()

  const handleCreateOrder = async () => {
    try {
      console.log(stateForm)
      await createOrder(stateForm)
    } catch {
      console.log('error')
    }
  }

  return (
    <div className={classes.conteiner}>
      <div className={classes.header}>
        <p>Создание заказа</p>
      </div>
      <div className={classes.body}>
        <div className={classes.leftColl}>
          <div className={classes.model}>
            <p>Модель</p>
            <ButtonSYS onClick={() => dispatch(visibleOn())}>Выбрать</ButtonSYS>
          </div>
          <InputOrder
            disable={true}
            placeholder={deviceModel ? deviceModel : 'выберите модель'}
            type="text"
            readOnly
          ></InputOrder>
          <span>SN / imei</span>
          <InputOrder
            type="text"
            value={deviceSN}
            onChange={(e) => dispatch(deviceSNBind(e.target.value))}
          ></InputOrder>
          <LegalEntity />
          <span>Имя</span>
          <InputOrder
            type="text"
            value={name}
            onChange={(e) => dispatch(nameBind(e.target.value))}
          ></InputOrder>
          <span>Фамилия</span>
          <InputOrder
            type="text"
            value={lastName}
            onChange={(e) => dispatch(lastNameBind(e.target.value))}
          ></InputOrder>
          <span>Номер телефона</span>
          <InputOrder
            type="number"
            value={phoneNum}
            onChange={(e) => dispatch(phoneNumBind(e.target.value))}
          ></InputOrder>
          <span>Описание неисправности</span>
          <textarea
            name="creatOrder"
            rows={5}
            value={descriptionDamage}
            onChange={(e) => dispatch(descriptionDamageBind(e.target.value))}
          ></textarea>
        </div>
        <div className={classes.rightColl}>
          <div className={classes.block}>
            <span>Менеджер</span>
            <InputOrder
              disable={true}
              placeholder="Андрей"
              type="text"
            ></InputOrder>
            <span>Инженер</span>
            <InputOrder type="text"></InputOrder>
          </div>
          <div className={classes.block}>
            <span>Предоплата</span>
            <InputOrder
              type="number"
              value={prePayment}
              placeholder="0"
              onChange={(e) => dispatch(prePaymentBind(e.target.value))}
            ></InputOrder>
            <span>Ориентировочная цена</span>
            <InputOrder
              type="number"
              value={prePrice}
              placeholder="0"
              onChange={(e) => dispatch(prePriceBind(e.target.value))}
            ></InputOrder>
            <span>Состояние, комплект</span>
            <textarea
              name="creatOrder"
              rows={5}
              value={descriptionDevice}
              onChange={(e) => dispatch(descriptionDeviceBind(e.target.value))}
            ></textarea>
          </div>
        </div>
      </div>
      <div className={classes.buttonCreate}>
        <ButtonR15 color={ColorVar.purple} onClick={() => handleCreateOrder()}>
          Создать
        </ButtonR15>
      </div>
    </div>
  )
}

export default CreatOrder
