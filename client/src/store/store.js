import { configureStore } from '@reduxjs/toolkit'
import headerReducer from './headerSlice'
import HomeReducer from './HomeSlice'

export default configureStore({
  reducer: {
    header:headerReducer,
    Home:HomeReducer
  }
})