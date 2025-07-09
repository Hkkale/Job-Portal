import axios from 'axios'
const base_url="http://localhost:8080/"

const registerUser = async (user)=>{

  return axios.post(`${base_url}register`,user)
  .then(res=>res.data)
  .catch(error=>{throw error});



}


const loginUser = async (user)=>{

  return axios.post(`${base_url}login`,user)
  .then(res=>res.data)
  .catch(error=>{throw error});



}


export {registerUser, loginUser}
