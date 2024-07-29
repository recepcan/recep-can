import { configureStore } from '@reduxjs/toolkit'
import headerReducer from './headerSlice'
import HomeReducer from './HomeSlice'
import userReducer from './user/userSlice.js'

export default configureStore({
  reducer: {
    header:headerReducer,
    Home:HomeReducer,
    user:userReducer
  }
})