import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [], // Tüm post verilerini depolar
  error: '',
  loading: false,
};

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async (currentUser) => {
  const response = await fetch(`/api/post/getposts?userId=${currentUser._id}&limit=50`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const data = await response.json();
  console.log('Fetched data:', data);
  return data;
});

export const fetchPost6 = createAsyncThunk('posts/fetchPost6', async (limit) => {
  const res = await fetch(`/api/post/getPosts?limit=${limit}`);
  if (!res.ok) {
    throw new Error('Network response was not ok');
  }
  const data = await res.json();
  console.log('Fetched data 6:', data);
  return data;
});

export const fetchPostctg = createAsyncThunk('posts/fetchPostctg', async (ctg) => {
  const res = await fetch(`/api/post/getPosts?category=${ctg}`);
  if (!res.ok) {
    throw new Error('Network response was not ok');
  }
  const data = await res.json();
  console.log('Fetched data ctg:', data);
  return data;
});

const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // fetchPosts reducers
    builder.addCase(fetchPosts.pending, (state) => {
      state.loading = true;
      state.error = '';
    });
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.data = action.payload; // Tüm veriyi günceller
      state.loading = false;
    });
    builder.addCase(fetchPosts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || 'Error fetching posts';
    });

    // fetchPost6 reducers
    builder.addCase(fetchPost6.pending, (state) => {
      state.loading = true;
      state.error = '';
    });
    builder.addCase(fetchPost6.fulfilled, (state, action) => {
      state.data = action.payload; // Tüm veriyi günceller
      state.loading = false;
    });
    builder.addCase(fetchPost6.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || 'Error fetching limited posts';
    });

    // fetchPostctg reducers
    builder.addCase(fetchPostctg.pending, (state) => {
      state.loading = true;
      state.error = '';
    });
    builder.addCase(fetchPostctg.fulfilled, (state, action) => {
      state.data = action.payload; // Kategoriye göre veriyi günceller
      state.loading = false;
    });
    builder.addCase(fetchPostctg.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || 'Error fetching category posts';
    });
  },
});

export default postSlice.reducer;
