import axios from 'axios'
const base_url="http://localhost:8080/users"

const registerUser = async (user)=>{

  return axios.post(`${base_url}/register`,user)
  .then(res=>res.data)
  .catch(error=>{throw error});



}


const loginUser = async (user)=>{

  return axios.post(`${base_url}/login`,user)
  .then(res=>res.data)
  .catch(error=>{throw error});



}

const sendOtp = async (email)=>{

  return axios.post(`${base_url}/sendOtp/${email}`,)
  .then(res=>res.data)
  .catch(error=>{throw error});



}

const verifyOtp = async (email,otp)=>{

  return axios.get(`${base_url}verifyOtp/${email}/${otp}`,)
  .then(res=>res.data)
  .catch(error=>{throw error});



}

const ChangePassword = async (email,password)=>{

  return axios.post(`${base_url}changePass`,{email,password})
  .then(res=>res.data)
  .catch(error=>{throw error});



}


export {registerUser, loginUser, sendOtp,verifyOtp,ChangePassword}
