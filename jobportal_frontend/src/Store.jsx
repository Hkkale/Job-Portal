import { configureStore } from "@reduxjs/toolkit";
import UserSlice from './Slices/UserSlice'
import ProfileSlice from './Slices/ProfileSlice'
import FilterSlice from './Slices/FilterSlice'
import SortSlice from './Slices/SortSlice'
import JwtSlice from './Slices/JwtSlice'



export default configureStore({
  reducer:{
    user:UserSlice,
    profile:ProfileSlice,
    filter:FilterSlice,
    sort:SortSlice,
    jwt:JwtSlice
  }
})