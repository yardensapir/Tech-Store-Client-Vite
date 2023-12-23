import { createSlice } from "@reduxjs/toolkit";

const userInfo = localStorage.getItem("userInfo");
const parsedUserInfo = userInfo ? JSON.parse(userInfo) : null;

const initialState: any = {
  userInfo: parsedUserInfo,
};
const authSlice = createSlice({
    name : 'auth',
    initialState,
    reducers:{
        setCredentials: (state,action)=>{
            state.userInfo = action.payload
            localStorage.setItem('userInfo',JSON.stringify(action.payload))
        },
        logout: (state)=>{
            state.userInfo = null
            localStorage.removeItem('userInfo')
        }
    }
})
export const { setCredentials,logout} = authSlice.actions
export default authSlice.reducer