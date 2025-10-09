import { configureStore } from "@reduxjs/toolkit";
import UserSlice from './Slices/UserSlice'
import ProfileSlice from './Slices/ProfileSlice'
import FilterSlice from './Slices/FilterSlice'



export default configureStore({
  reducer:{
    user:UserSlice,
    profile:ProfileSlice,
    filter:FilterSlice
  }
})