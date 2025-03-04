
import { createSlice } from '@reduxjs/toolkit'

export const headerSlice = createSlice({
  name: 'header',
  initialState: {
    theme: 'light',
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
        id: 'contact',
        name: 'contact',
        to: '/contact',
       
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
    toggleTheme: state => {
      state.theme = state.theme==='light' ? 'dark' : 'light'
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
export const { changeLanguage, changePath, toggleMenu, toggleTheme, ddAdd,ddremove } = headerSlice.actions

export default headerSlice.reducer


