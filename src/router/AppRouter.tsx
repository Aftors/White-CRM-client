import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Orders from '../page/Orders'
import Reception from '../page/Reception'

function AppRouter() {
  return (
    <Routes>
      <Route path="/" />
      <Route path="/reception" element={<Reception />} />
      <Route path="/orders" element={<Orders />} />
    </Routes>
  )
}

export default AppRouter
