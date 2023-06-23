import React from 'react'
//@ts-ignore
import ReactDOM from 'react-dom/client'
import App from './App'
import { Provider } from 'react-redux'

import store from './redux/store'

import 'antd/dist/reset.css'
import './styles/index.scss'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <Provider store={store}>
    <App />
  </Provider>
)
