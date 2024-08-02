
import { createSlice } from '@reduxjs/toolkit'

export const headerSlice = createSlice({
  name: 'header',
  initialState: {
    darkMode: false,
    language: true,
    menu: false,
    Links:[
      {
        id: 'Anasayfa',
        name: 'Anasayfa',
        to: '/',
      
      },
      {
        id: 'Hakkinda',
        name: 'Hakkinda',
        to: '/Hakkinda',
        index:true
      },
      {
        id: 'İletişim',
        name: 'İletişim',
        to: '/İletişim',
       
      },
      {
        id: 'admin',
        name: 'admin',
        to: '/admin',
       
      }
  
    ]
    ,
    isActive: false,
    dropdown: false,
    dropdownItems: [
      { 
        category: 'Anasayfa',
        text: 'Anasayfa 1'
      },
      {
        category: 'Anasayfa',
        text: 'Anasayfa 2'
      },
      {
        category: 'Anasayfa',
        text: 'Anasayfa 3'
      },
      {
        category: 'Hakkında',
        text: 'Hakkında 4'
      },
      {
        category: 'Hakkında',
        text: 'Hakkında 4'
      },
      {
        category: 'Hakkında',
        text: 'Hakkında 4'
      },
      {
        category: 'İletişim',
        text: 'İletişim 4'
      },
      {
        category: 'İletişim',
        text: 'İletişim 4'
      },
      {
        category: 'İletişim',
        text: 'İletişim 4'
      }
    ],
  },
  reducers: {

    changeLanguage: state => {
      state.language = !state.language;
    },
    changePath: state => {
      state.isActive = !state.isActive;
    },
    toggleMenu: state => {
      state.menu = !state.menu
    },
    toggledarkMode: state => {
      state.darkMode = !state.darkMode
    },
    ddAdd: state => {
      state.dropdown = true
    },
    ddremove: state => {
      state.dropdown = false
    }
  }
})

// Action creators are generated for each case reducer function
export const { changeLanguage, changePath, toggleMenu, toggledarkMode, ddAdd,ddremove } = headerSlice.actions

export default headerSlice.reducer


