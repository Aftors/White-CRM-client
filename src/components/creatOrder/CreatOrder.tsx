import React from 'react'
import classes from './creatOrder.module.scss'
import ButtonSYS from '../UI/buttonSYS/ButtonSYS'
import ButtonR15, { ColorVar } from '../UI/buttonR15/ButtonR15'
import InputOrder from '../UI/inputOrder/inputOrder'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { deviceModalSlice } from '../../store/reducers/modal/DeviceModalSlice'
import LegalEntity from './legalEntity/LegalEntity'
import { CreateOrderSlice } from '../../store/reducers/order/CreateOrderSlice'

const CreatOrder = () => {
  const { name, lastName, prePayment, prePrice, phoneNum, deviceSN } =
    useAppSelector((state) => state.createOrderReducer)
  const { visibleOn } = deviceModalSlice.actions
  const {
    nameBind,
    lastNameBind,
    prePaymentBind,
    prePriceBind,
    phoneNumBind,
    deviceSNBind,
  } = CreateOrderSlice.actions
  const dispatch = useAppDispatch()

  return (
    <div className={classes.conteiner}>
      <div className={classes.header}>
        <span>№1303</span>
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
            placeholder="Macbook Pro a1708"
            type="text"
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
        </div>
        <div className={classes.rightColl}>
          <div>
            <span>Менеджер</span>
            <InputOrder
              disable={true}
              placeholder="Андрей"
              type="text"
            ></InputOrder>
            <span>Инженер</span>
            <InputOrder type="text"></InputOrder>
          </div>
          <div>
            <span>Предоплата</span>
            <InputOrder
              type="number"
              value={prePayment}
              onChange={(e) => dispatch(prePaymentBind(e.target.value))}
            ></InputOrder>
            <span>Ориентировочная цена</span>
            <InputOrder
              type="number"
              value={prePrice}
              onChange={(e) => dispatch(prePriceBind(e.target.value))}
            ></InputOrder>
          </div>
        </div>
      </div>
      <span>Описание неисправности</span>
      <textarea name="creatOrder" rows={5}></textarea>
      <span>Состояние, комплект</span>
      <textarea name="creatOrder" rows={5}></textarea>
      <div className={classes.basement}>
        <ButtonR15 color={ColorVar.purple}>Создать</ButtonR15>
      </div>
    </div>
  )
}

export default CreatOrder
