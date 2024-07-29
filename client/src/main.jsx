import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'
import {store,persistor} from "./store/store"
import './index.css'
import { PersistGate } from 'redux-persist/integration/react'


ReactDOM.createRoot(document.getElementById('root')).render(
  
<PersistGate persistor={persistor} >
  <Provider store={store}> 
    <App />
  </Provider>
  </PersistGate>
  ,
)
