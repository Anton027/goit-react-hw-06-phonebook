import { createSlice } from "@reduxjs/toolkit";

const initialFilterState = '';

export const filterSlice = createSlice({
    name: 'filter',
    initialState: initialFilterState,
    reducers: {
        setStatusFilter(state,action) {
            // state.status = action.payload;
            return action.payload;
        },
    }
})

export const { setStatusFilter } = filterSlice.actions;
