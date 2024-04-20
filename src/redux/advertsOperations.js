import { createAsyncThunk } from '@reduxjs/toolkit';
//import * as apiOperations from '../services/advertsApi';
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

// export const addContact = createAsyncThunk(
//   'contacts/addContact',
//   async ({ name, number }, { rejectWithValue }) => {
//     try {
//       const contact = await fetchContactsAPI.addContact({ name, number });
//       return contact;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );

// export const deleteContact = createAsyncThunk(
//   'contacts/deleteContact',
//   async (contactId, { rejectWithValue }) => {
//     try {
//       const contact = await fetchContactsAPI.deleteContact(contactId);
//       return contact;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );
