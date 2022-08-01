import React from 'react'
import classes from './leftBar.module.scss'
import Navigation from '../navigation/Navigation'

const LeftBar = () => {
  return (
    <div className={classes.main}>
      <h1>
        <span>White</span>CRM
      </h1>
      <Navigation></Navigation>
    </div>
  )
}

export default LeftBar
