import { persistReducer, persistStore } from "redux-persist";
import { contactsReducer } from "./contactsSlice";
import filtersReducer from './filtersSlice';
import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";

const contactsPersistConfig = {
    key: 'contacts',
    storage,
};

const persistContactsReducer = persistReducer(contactsPersistConfig, contactsReducer);

export const store = configureStore({
    reducer: {
        contacts: persistContactsReducer,
        filters: filtersReducer,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})

export const persistor = persistStore(store);