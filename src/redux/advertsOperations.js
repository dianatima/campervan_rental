import { createAsyncThunk } from '@reduxjs/toolkit';
import fetchAdvertsAPI from '../services/advertsApi.js';

export const fetchAllAdverts = createAsyncThunk(
  'adverts/fetchAllAdverts',
  async (page, { rejectWithValue }) => {
    try {
      const adverts = await fetchAdvertsAPI(page);
      return adverts;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
