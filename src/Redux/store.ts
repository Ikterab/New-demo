// import { useAppDispatch } from './../../node_modules/react-redux/dist/react-redux.d';
// import { RootState } from './../../node_modules/@reduxjs/toolkit/src/query/core/apiState';
import { configureStore } from "@reduxjs/toolkit";
import  userReducer  from '../Redux/redux.ts';

export const store = configureStore({
    reducer: {
        user:userReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
