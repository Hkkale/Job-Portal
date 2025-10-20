import React from 'react'
import axios from 'axios'
import axiosInstance from '../Interceptor/AxiosInterceptor';
const base_url="http://localhost:8080/profiles"

const getProfile = async (id)=>{

  return axiosInstance.get(`/profiles/get/${id}`)
  .then(res=>res.data)
  .catch(error=>{throw error});



}
const getAllProfiles = async ()=>{

  return axios.get(`${base_url}/get`)
  .then(res=>res.data)
  .catch(error=>{throw error});



}


const updateProfile = async (profile)=>{

  return axios.put(`${base_url}/update`,profile)
  .then(res=>res.data)
  .catch(error=>{throw error});



}



export { getProfile, updateProfile,getAllProfiles}
