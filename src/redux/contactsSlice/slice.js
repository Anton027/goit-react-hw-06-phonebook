import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialItemsState = {
    items: []
};

export const itemsSlice = createSlice({
    name: 'contacts',
    initialState: initialItemsState,
    reducers: {

        add: (state, { payload }) => {
            state.items.push({
                id: nanoid(),
                name: payload.name,
                number: payload.number,
            })
        },
        remove(state, {payload}) {
            return {
                ...state,
                items: state.items.filter(item => item.id !== payload)
                }
        }
    },
});

export const { add, remove } = itemsSlice.actions;
