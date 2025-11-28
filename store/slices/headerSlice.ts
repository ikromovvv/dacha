import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    activeMenuName: '',
}

 const headerSlice = createSlice({
    name: 'header',
    initialState,
    reducers: {
        setActiveMenuName: (state, action) => {
            state.activeMenuName = action.payload
        }
    }
})

export const {setActiveMenuName} = headerSlice.actions
export default headerSlice.reducer