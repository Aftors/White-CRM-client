import React from 'react'
import * as ReactDOMClient from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { setupStore } from './store/store'

const store = setupStore()
const container = document.getElementById('root')
const root = ReactDOMClient.createRoot(container!)
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
)
