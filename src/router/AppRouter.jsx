import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../page/Home'
import Reception from '../page/Reception'

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/auth" element={<Reception />} />
    </Routes>
  )
}

export default AppRouter
