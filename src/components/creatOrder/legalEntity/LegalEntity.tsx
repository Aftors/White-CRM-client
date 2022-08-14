import classes from './legalEntity.module.scss'
import { useAppDispatch, useAppSelector } from '../../../hooks/redux'
import { CreateOrderSlice } from '../../../store/reducers/order/CreateOrderSlice'

const LegalEntity = () => {
  const { legalEntity } = useAppSelector((state) => state.createOrderReducer)
  const { legalEntityState } = CreateOrderSlice.actions
  const dispatch = useAppDispatch()

  return (
    <div className={classes.legalEntity}>
      <div className={classes.body}>
        <input
          type="radio"
          name="legalEntity"
          value="false"
          checked={legalEntity === false ? true : false}
          onChange={() => dispatch(legalEntityState(true))}
        />
        <label onClick={() => dispatch(legalEntityState(false))}>
          Физ. лицо
        </label>
      </div>
      <div className={classes.body}>
        <input
          type="radio"
          name="legalEntity"
          value="true"
          checked={legalEntity === true ? true : false}
          onChange={() => dispatch(legalEntityState(true))}
        />
        <label onClick={() => dispatch(legalEntityState(true))}>Юр. лицо</label>
      </div>
    </div>
  )
}

export default LegalEntity
