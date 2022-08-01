import React from 'react'
import classes from './inputSearch.module.scss'

const InputCustom = () => {
  return (
    <input
      className={classes.input}
      placeholder="Поиск заказа"
      type="text"
    ></input>
  )
}

export default InputCustom
