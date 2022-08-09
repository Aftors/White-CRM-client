import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Orders from '../page/Orders'
import Reception from '../page/Reception'
import Registration from '../page/Registration'

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Registration />} />
      <Route path="/reception" element={<Reception />} />
      <Route path="/orders" element={<Orders />} />
    </Routes>
  )
}

export default AppRouter
