import React from 'react'
import classes from './orders.module.scss'
import Header from '../components/header/Header'
import Body from '../components/body/Body'
import ConfigOrder from '../components/configOrder/ConfigOrder'
import StatusBar from '../components/statusBar/StatusBar'

const Home = () => {
  return (
    <div className={classes.main}>
      <Header />
      <StatusBar />
      <Body />
      <ConfigOrder />
    </div>
  )
}

export default Home
