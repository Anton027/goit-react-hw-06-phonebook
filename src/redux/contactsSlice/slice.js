import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialItemsState = [];

export const itemsSlice = createSlice({
    name: 'items',
    initialState: initialItemsState,
    reducers: {
        add: {
            reducer(state, action) {
                state.push(action.payload)
            },
            prepare({ name, number }) {
                return {
                    payload: {
                        name,
                        number,
                        id: nanoid()
                    }
                }
            }
        },
        remove(state, action) {
            return state.filter(contact =>
                contact.id !== action.payload
            )
        }
    }
});

export const { add, remove } = itemsSlice.actions;
