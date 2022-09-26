import { configureStore } from "@reduxjs/toolkit";
import { itemsSlice } from "./contactsSlice/slice";
import { filterSlice } from "./filterSlice/filterSlice";
// import storage from "redux-persist/lib/storage"; 
// import {
//     persistStore,
//     persistReducer,
//     FLUSH,
//     REHYDRATE,
//     PAUSE,
//     PERSIST,
//     PURGE,
//     REGISTER,
// } from 'redux-persist';

// const persistConfig = {
//     key: 'items',
//     storage,
//     blacklist: ['filter']
// }

// const persistedItemsReduser = persistReducer(persistConfig,itemsSlice.reducer)

export const store = configureStore({
    reducer: {
        items: itemsSlice.reducer,
        filter: filterSlice.reducer,
    },
    // middleware: (getDefaultMiddleware) =>
    //         getDefaultMiddleware({
    //             serializableCheck: {
    //                 ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    //             },
    //         }),
});

// export const persistor = persistStore(store);

