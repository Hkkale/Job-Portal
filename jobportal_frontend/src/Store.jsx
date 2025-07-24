import { configureStore } from "@reduxjs/toolkit";
import UserSlice from './Slices/UserSlice'
import ProfileSlice from './Slices/ProfileSlice'



export default configureStore({
  reducer:{
    user:UserSlice,
    profile:ProfileSlice
  }
})