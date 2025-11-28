import { configureStore } from "@reduxjs/toolkit"
import filterReducer from "./slices/filterSlice"
import headerSlice from "@/store/slices/headerSlice";
import employeesSlice from "@/store/slices/employeesSlice";

const store = configureStore({
  reducer: {
    employees: employeesSlice,
    filter: filterReducer,
    header: headerSlice
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
