import { createSlice } from '@reduxjs/toolkit';


// const initialFilterState = '';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    filter: '',
  },
  reducers: {
    contactsFilter(state, action) {
      return {
        filter: action.payload
      }
    },
  },
});

export const { contactsFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
