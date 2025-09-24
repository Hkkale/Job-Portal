import React from 'react'
import axios from 'axios'
const base_url="http://localhost:8080/jobs"

const postJob = async (job)=>{

  return axios.post(`${base_url}/post`,job)
  .then(res=>res.data)
  .catch(error=>{throw error});



}


const getAllJobs = async ()=>{

  return axios.get(`${base_url}/getAll`)
  .then(res=>res.data)
  .catch(error=>{throw error});



}

const getJob = async (id)=>{

  return axios.get(`${base_url}/get/${id}`)
  .then(res=>res.data)
  .catch(error=>{throw error});



}

const applyJob = async(id,applicant)=>{
  return axios.post(`${base_url}/apply/${id}`,applicant)
  .then(res=>res.data)
  .catch(error=>{throw error});

}


const getJobPostedBy = async (id)=>{

  return axios.get(`${base_url}/postedBy/${id}`)
  .then(res=>res.data)
  .catch(error=>{throw error});



}

const changeAppStatus = async(application)=>{
  return axios.post(`${base_url}/changeAppStatus`,application)
  .then(res=>res.data)
  .catch(error=>{throw error});

}




export { postJob, getAllJobs,getJob,applyJob,getJobPostedBy,changeAppStatus}
