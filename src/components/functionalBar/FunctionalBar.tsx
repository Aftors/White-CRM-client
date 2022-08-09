import React from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { functionalBarSlice } from '../../store/reducers/functionarBar/FunctionalBarSlice'
import ButtonSYS from '../UI/buttonSYS/ButtonSYS'
import classes from './functional.module.scss'

const FunctionalBar = () => {
  const { activeComponent } = useAppSelector(
    (state) => state.functionalBarReducer
  )
  const { selectActiveComponent } = functionalBarSlice.actions
  const dispatch = useAppDispatch()

  return (
    <div className={classes.functionalBar}>
      <ButtonSYS
        active={activeComponent === 'create' ? true : false}
        onClick={() => dispatch(selectActiveComponent('create'))}
      >
        Создать заказ
      </ButtonSYS>
      <ButtonSYS
        active={activeComponent === 'accept' ? true : false}
        onClick={() => dispatch(selectActiveComponent('accept'))}
      >
        Принять запчасть
      </ButtonSYS>
      <ButtonSYS>Прайс</ButtonSYS>
    </div>
  )
}

export default FunctionalBar
