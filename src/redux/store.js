import { configureStore } from "@reduxjs/toolkit";
import { itemsSlice } from "./contactsSlice/slice";
import { filterSlice } from "./filterSlice/filterSlice";


export const store = configureStore({
    reducer: {
        items: itemsSlice.reducer,
        filter: filterSlice.reducer
    },
})