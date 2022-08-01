import React from 'react'
import ButtonStatus, { ButtonColor } from '../UI/buttonStatus/ButtonStatus'
import ButtonSYS from '../UI/buttonSYS/ButtonSYS'
import classes from './configOrder.module.scss'

const ConfigOrder = () => {
  return (
    <div className={classes.configOrderConteiner}>
      <div className={classes.oneColl}>
        <div className={classes.header}>
          <span className={classes.titel}>N1319</span>
          <p>Итого:</p>
          <span className={classes.total}>7900₽</span>
        </div>
        <div className={classes.conteiner}>
          <div>
            <div className={classes.funcbut}>
              <span>Работа</span>
              <ButtonSYS active={true}>Прайс</ButtonSYS>
              <ButtonSYS active={true}>+</ButtonSYS>
            </div>
            <div className={classes.body}>
              <div className={classes.worksOrder}>
                <i></i>
                <input type="text" className={classes.inputText} />
                <input type="num" className={classes.inputNum} />
              </div>
              <div className={classes.worksOrder}>
                <i></i>
                <input type="text" className={classes.inputText} />
                <input type="num" className={classes.inputNum} />
              </div>
              <div className={classes.worksOrder}>
                <i></i>
                <input type="text" className={classes.inputText} />
                <input type="num" className={classes.inputNum} />
              </div>
              <div className={classes.worksOrder}>
                <i></i>
                <input type="text" className={classes.inputText} />
                <input type="num" className={classes.inputNum} />
              </div>
            </div>
          </div>
          <div>
            <div className={classes.funcbut}>
              <span>Запчасти</span>
              <ButtonSYS active={true}>склад</ButtonSYS>
              <ButtonSYS active={true}>+</ButtonSYS>
            </div>
            <div className={classes.body}>
              <div className={classes.worksOrder}>
                <i></i>
                <input type="text" className={classes.inputText} />
                <input type="num" className={classes.inputNum} />
              </div>
              <div className={classes.worksOrder}>
                <i></i>
                <input type="text" className={classes.inputText} />
                <input type="num" className={classes.inputNum} />
              </div>
              <div className={classes.worksOrder}>
                <i></i>
                <input type="text" className={classes.inputText} />
                <input type="num" className={classes.inputNum} />
              </div>
              <div className={classes.worksOrder}>
                <i></i>
                <input type="text" className={classes.inputText} />
                <input type="num" className={classes.inputNum} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={classes.twoColl}>
        <span className={classes.historyTitle}>История</span>
        <div className={classes.historyLine}>
          <i className={classes.statusColorGreen}></i>
          <span>23.07.2022</span>
        </div>
        <div className={classes.employeeChange}>Василий</div>
        <div className={classes.historyLine}>
          <i className={classes.statusColorBlue}></i>
          <span>23.07.2022</span>
        </div>
        <div className={classes.employeeChange}>Андрей</div>
        <div className={classes.historyLine}>
          <i className={classes.statusColorPurple}></i>
          <span>23.07.2022</span>
        </div>
      </div>

      <div className={classes.threeColl}>
        <span>Статус</span>
        <span>Клиент</span>
        <span>Мэнеджер</span>
        <span>Мастер</span>
        <span>Описание</span>
      </div>

      <div className={classes.fourColl}>
        <div className={classes.status}>
          <ButtonStatus color={ButtonColor.purple}>Согласован</ButtonStatus>
          <span>25.07.2022</span>
        </div>
        <div className={classes.client}>
          <span className={classes.nameClient}>Клинтон.D.G</span>
          <span className={classes.clientInfo}>подробнее</span>
        </div>
        <div className={classes.manager}>
          <p>Смирнов.В</p>
          <span>Изменить</span>
        </div>
        <div className={classes.engineer}>
          <p>Василий.С</p>
          <span>Изменить</span>
        </div>
        <div className={classes.description}>
          <p>После другого сервиса не включается но есть индикация</p>
        </div>
      </div>
    </div>
  )
}

export default ConfigOrder
