import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
    data: [],
    error: '',
    loading: false
};

export const fetchTexts = createAsyncThunk('fetchTexts', async (currentUser) => {
    const response = await fetch(`/api/text/getTexts?userId=${currentUser._id}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    console.log('Fetched data:', data); // Veriyi kontrol et
    return data;
  });
  

  const textsSlice = createSlice({
    name: "texts",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder.addCase(fetchTexts.pending, (state) => {
        state.loading = true;
        state.error = "";
      });
      builder.addCase(fetchTexts.fulfilled, (state, action) => {
        state.data = action.payload; // Veriyi doğrudan güncelliyor
        state.loading = false;
        state.error = "";
      });
      builder.addCase(fetchTexts.rejected, (state) => {
        state.loading = false;
        state.error = "Error fetching texts data";
      });
    },
  });
  

export default textsSlice.reducer;
