
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RegisterData } from "../Pages/Registerpage";

interface Userstate {
    data: RegisterData[] ;
}
const initialState: Userstate = {
    // data: User | null,
    data: JSON.parse(localStorage.getItem("registerdata") || "[]"),
};

const userslice = createSlice({ 
    name: 'user',
    initialState,
    reducers: {
        registerUser: (state, action: PayloadAction<RegisterData>) => {
            state.data.push(action.payload);
            localStorage.setItem('registerdata', JSON.stringify(state.data));
        },
  

        logoutUser: (state) => {
            state.data = [];
            localStorage.removeItem("userList");
        },
    },
});
export const { registerUser, logoutUser } = userslice.actions;
export default userslice.reducer;
