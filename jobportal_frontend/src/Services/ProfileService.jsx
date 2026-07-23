import React from 'react'

import axiosInstance from '../Interceptor/AxiosInterceptor';


const getProfile = async (id)=>{

  return axiosInstance.get(`/profiles/get/${id}`)
  .then(res=>res.data)
  .catch(error=>{throw error});



}
const getAllProfiles = async ()=>{

  return axiosInstance.get(`/profiles/get`)
  .then(res=>res.data)
  .catch(error=>{throw error});



}


const updateProfile = async (profile)=>{

  return axiosInstance.put(`/profiles/update`,profile)
  .then(res=>res.data)
  .catch(error=>{throw error});



}



export { getProfile, updateProfile,getAllProfiles}
