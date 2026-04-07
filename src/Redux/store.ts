// import { useAppDispatch } from './../../node_modules/react-redux/dist/react-redux.d';
// import { RootState } from './../../node_modules/@reduxjs/toolkit/src/query/core/apiState';
import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../Redux/redux.ts';
import { baseapi } from "./API/Baseapi/baseapi.ts";

export const store = configureStore({
    reducer: {
        [baseapi.reducerPath]:baseapi.reducer,
        user:userReducer,
    },
    middleware:(getDefaultMiddleware)=> 
        getDefaultMiddleware().concat(baseapi.middleware)
    
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
