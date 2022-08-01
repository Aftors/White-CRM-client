import React from 'react'
import classes from './app.module.scss'
import AppRouter from './router/AppRouter'
import LeftBar from './components/leftBar/LeftBar'

function App() {
  return (
    <div className={classes.App}>
      <LeftBar />
      <AppRouter />
    </div>
  )
}

export default App
