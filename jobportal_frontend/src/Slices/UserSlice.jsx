import React from 'react'
import {createSlice} from '@reduxjs/toolkit'
import { getItem, removeItem, setItem } from '../Services/LocalStorageService'


const UserSlice = createSlice({

  name:"user",
  initialState:null,
  reducers:{
    setUser:(state, action)=>{
    setItem("user", action.payload);
    return action.payload;
    },

    removeUser:(state)=>{

      
      removeItem("token");
      removeItem("user");
      
      
      state=null;
      return state;

    }
  }

})
 


export const {setUser,removeUser} = UserSlice.actions;

export default UserSlice.reducer;
