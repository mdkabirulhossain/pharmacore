import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SearchState {
  isOpen: boolean;
  query: string;
}

const initialState: SearchState = {
  isOpen: false,
  query: '',
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchOpen: (state, action: PayloadAction<boolean>) => {
      state.isOpen = action.payload;
    },
    toggleSearch: (state) => {
      state.isOpen = !state.isOpen;
    },
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.query = action.payload;
    },
    clearSearch: (state) => {
      state.query = '';
    },
  },
});

export const { setSearchOpen, toggleSearch, setSearchQuery, clearSearch } = searchSlice.actions;
export default searchSlice.reducer;
