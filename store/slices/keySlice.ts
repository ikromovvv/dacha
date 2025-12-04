import { createSlice } from "@reduxjs/toolkit";

const initialState: any = {
    keyList: []
}

const keySlice = createSlice({
    name: "keyList",
    initialState,
    reducers: {
        addKeyList: (state, action: any) => {
            state.keyList = [...state.keyList , action.payload];
        },
    },
});

export const { addKeyList } = keySlice.actions;
export default keySlice.reducer;
