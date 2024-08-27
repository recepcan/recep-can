import headerReducer from './headerSlice'
import HomeReducer from './HomeSlice'
import modalSlice from './modalSlice';
import postSlice from './postSlice';
import textsSlice from './textsSlice';
import userReducer from './user/userSlice'
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const rootReducer = combineReducers({
  header:headerReducer,
    Home:HomeReducer,
    user:userReducer,
    modal:modalSlice,
    texts:textsSlice,
    posts:postSlice
});

const persistConfig = {
  key: 'root',
  storage,
  version: 1,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export const persistor = persistStore(store);