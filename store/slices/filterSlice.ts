import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

interface FilterState {
  searchQuery: string
  selectedCategory: string
}

const filterSlice = createSlice({
  name: "filter",
  initialState: {
    searchQuery: "",
    selectedCategory: "All",
  } as FilterState,
  reducers: {
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload
    },
    setSelectedCategory: (state, action: PayloadAction<string>) => {
      state.selectedCategory = action.payload
    },
  },
})

export const { setSearchQuery, setSelectedCategory } = filterSlice.actions
export default filterSlice.reducer
