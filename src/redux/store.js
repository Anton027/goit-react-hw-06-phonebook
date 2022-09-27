import { configureStore } from "@reduxjs/toolkit";
import { itemsSlice } from "./contactsSlice/slice";
import { filterSlice } from "./filterSlice/filterSlice";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'


const persistConfig = {
    key: 'contacts',
    storage,
    blacklist: ['filter']
}
const persistedItemsReduser = persistReducer(
    persistConfig,
    itemsSlice.reducer
)

export const store = configureStore({
    reducer: {
        contacts: persistedItemsReduser, 
        filter: filterSlice.reducer,
    },
    middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
        });
    },
});

export const persistor = persistStore(store)


