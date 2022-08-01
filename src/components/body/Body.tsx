import React from 'react'
import ButtonStatus, { ButtonColor } from '../UI/buttonStatus/ButtonStatus'
import classes from './body.module.scss'

const Body = () => {
  return (
    <div className={classes.conteiner}>
      <div className={classes.titel}>
        <span className={classes.titelCell} id={classes.order}>
          заказ №
        </span>
        <span className={classes.titelCell} id={classes.names}>
          Название
        </span>
        <span className={classes.titelCell} id={classes.info}>
          Описание
        </span>
        <span className={classes.titelCell} id={classes.state}>
          Статус
        </span>
        <span className={classes.titelCell} id={classes.date}>
          Дата
        </span>
        <span className={classes.titelCell} id={classes.cash}>
          Цена
        </span>
      </div>
      <div className={classes.row}>
        <span className={`${classes.order} ${classes.cell}`} id={classes.order}>
          1306
        </span>
        <span className={`${classes.names} ${classes.cell}`} id={classes.names}>
          Macbook Pro A1708
        </span>
        <span className={`${classes.info} ${classes.cell}`} id={classes.info}>
          Не включается, после другого сервиса.
        </span>
        <span className={`${classes.state} ${classes.cell}`} id={classes.state}>
          <ButtonStatus color={ButtonColor.green}>Новый</ButtonStatus>
        </span>
        <span className={`${classes.date} ${classes.cell}`} id={classes.date}>
          7.07.22
        </span>
        <span className={`${classes.cash} ${classes.cell}`} id={classes.cash}>
          4500₽
        </span>
      </div>
      <div className={classes.row}>
        <span className={`${classes.order} ${classes.cell}`} id={classes.order}>
          1307
        </span>
        <span className={`${classes.names} ${classes.cell}`} id={classes.names}>
          Asus k53
        </span>
        <span className={`${classes.info} ${classes.cell}`} id={classes.info}>
          Утопленник
        </span>
        <span className={`${classes.state} ${classes.cell}`} id={classes.state}>
          <ButtonStatus color={ButtonColor.orange}>Согласование</ButtonStatus>
        </span>
        <span className={`${classes.date} ${classes.cell}`} id={classes.date}>
          7.07.22
        </span>
        <span className={`${classes.cash} ${classes.cell}`} id={classes.cash}>
          12500₽
        </span>
      </div>
      <div className={classes.row}>
        <span className={`${classes.order} ${classes.cell}`} id={classes.order}>
          1308
        </span>
        <span className={`${classes.names} ${classes.cell}`} id={classes.names}>
          Samsung a30s
        </span>
        <span className={`${classes.info} ${classes.cell}`} id={classes.info}>
          Замена модуля
        </span>
        <span className={`${classes.state} ${classes.cell}`} id={classes.state}>
          <ButtonStatus color={ButtonColor.ocean}>В работе</ButtonStatus>
        </span>
        <span className={`${classes.date} ${classes.cell}`} id={classes.date}>
          4.07.22
        </span>
        <span className={`${classes.cash} ${classes.cell}`} id={classes.cash}>
          4500₽
        </span>
      </div>
      <div className={classes.row}>
        <span className={`${classes.order} ${classes.cell}`} id={classes.order}>
          1319
        </span>
        <span className={`${classes.names} ${classes.cell}`} id={classes.names}>
          Huawei p40
        </span>
        <span className={`${classes.info} ${classes.cell}`} id={classes.info}>
          Залит
        </span>
        <span className={`${classes.state} ${classes.cell}`} id={classes.state}>
          <ButtonStatus color={ButtonColor.ocean}>В работе</ButtonStatus>
        </span>
        <span className={`${classes.date} ${classes.cell}`} id={classes.date}>
          14.06.22
        </span>
        <span className={`${classes.cash} ${classes.cell}`} id={classes.cash}>
          4500₽
        </span>
      </div>
      <div className={classes.row}>
        <span className={`${classes.order} ${classes.cell}`} id={classes.order}>
          1308
        </span>
        <span className={`${classes.names} ${classes.cell}`} id={classes.names}>
          Xiaomi mi air
        </span>
        <span className={`${classes.info} ${classes.cell}`} id={classes.info}>
          Диагностика
        </span>
        <span className={`${classes.state} ${classes.cell}`} id={classes.state}>
          <ButtonStatus color={ButtonColor.purple}>Согласован</ButtonStatus>
        </span>
        <span className={`${classes.date} ${classes.cell}`} id={classes.date}>
          4.07.22
        </span>
        <span className={`${classes.cash} ${classes.cell}`} id={classes.cash}>
          1500₽
        </span>
      </div>
      <div className={classes.row}>
        <span className={`${classes.order} ${classes.cell}`} id={classes.order}>
          1325
        </span>
        <span className={`${classes.names} ${classes.cell}`} id={classes.names}>
          Macbook air 2017
        </span>
        <span className={`${classes.info} ${classes.cell}`} id={classes.info}>
          Временами перезагружается, грееться, артефакты
        </span>
        <span className={`${classes.state} ${classes.cell}`} id={classes.state}>
          <ButtonStatus color={ButtonColor.red}>Отказ</ButtonStatus>
        </span>
        <span className={`${classes.date} ${classes.cell}`} id={classes.date}>
          3.06.22
        </span>
        <span className={`${classes.cash} ${classes.cell}`} id={classes.cash}>
          11500₽
        </span>
      </div>
      <div className={classes.row}>
        <span className={`${classes.order} ${classes.cell}`} id={classes.order}>
          1330
        </span>
        <span className={`${classes.names} ${classes.cell}`} id={classes.names}>
          Lenovo 15-w
        </span>
        <span className={`${classes.info} ${classes.cell}`} id={classes.info}>
          Не вкл.
        </span>
        <span className={`${classes.state} ${classes.cell}`} id={classes.state}>
          <ButtonStatus color={ButtonColor.green}>Новый</ButtonStatus>
        </span>
        <span className={`${classes.date} ${classes.cell}`} id={classes.date}>
          4.07.22
        </span>
        <span className={`${classes.cash} ${classes.cell}`} id={classes.cash}>
          1700₽
        </span>
      </div>
      <div className={classes.row}>
        <span className={`${classes.order} ${classes.cell}`} id={classes.order}>
          1344
        </span>
        <span className={`${classes.names} ${classes.cell}`} id={classes.names}>
          iPhone 11
        </span>
        <span className={`${classes.info} ${classes.cell}`} id={classes.info}>
          Замена модуля
        </span>
        <span className={`${classes.state} ${classes.cell}`} id={classes.state}>
          <ButtonStatus color={ButtonColor.orange}>Согласование</ButtonStatus>
        </span>
        <span className={`${classes.date} ${classes.cell}`} id={classes.date}>
          2.06.22
        </span>
        <span className={`${classes.cash} ${classes.cell}`} id={classes.cash}>
          1500₽
        </span>
      </div>
    </div>
  )
}

export default Body
