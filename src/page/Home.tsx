import React from 'react'
import classes from './home.module.scss'
import Header from '../components/header/Header'
import Body from '../components/body/Body'
import ConfigOrder from '../components/configOrder/ConfigOrder'

const Home = () => {
  return (
    <div className={classes.home}>
      <Header />
      <Body />
      <ConfigOrder />
    </div>
  )
}

export default Home
