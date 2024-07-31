import { createSlice } from '@reduxjs/toolkit'


export const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    modal:false
  },
  reducers: {
    modalAction: state => {
        state.modal = !state.modal
      },
  }
})

// Action creators are generated for each case reducer function
export const { modalAction} = modalSlice.actions

export default modalSlice.reducer
