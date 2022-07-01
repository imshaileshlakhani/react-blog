import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { contactApi } from '../services/contactApi'
import { postApi } from '../services/postApi';
import { commentApi } from '../services/commentApi';
import { userApi } from '../services/userApi';
import { likeApi } from '../services/likeApi';

export const store = configureStore({
    reducer: {
        [contactApi.reducerPath]: contactApi.reducer,
        [postApi.reducerPath]: postApi.reducer,
        [commentApi.reducerPath]: commentApi.reducer,
        [userApi.reducerPath]: userApi.reducer,
        [likeApi.reducerPath]: likeApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(contactApi.middleware, postApi.middleware, commentApi.middleware, userApi.middleware, likeApi.middleware),
});

setupListeners(store.dispatch)