import { configureStore } from "@reduxjs/toolkit"
import filterReducer from "./slices/filterSlice"
import headerSlice from "@/store/slices/headerSlice";
import employeesSlice from "@/store/slices/employeesSlice";
import keySlice from "@/store/slices/keySlice";

const store = configureStore({
  reducer: {
    employees: employeesSlice,
    filter: filterReducer,
    header: headerSlice,
    key: keySlice
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
