import { configureStore } from "@reduxjs/toolkit";

import { repositoriesApi } from "./repositoriesApi";

const store = configureStore({
  reducer: {
    [repositoriesApi.reducerPath]: repositoriesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(repositoriesApi.middleware),
});

export type RootStateType = ReturnType<typeof store.getState>;
export type AppDispatchType = typeof store.dispatch;

export default store;
