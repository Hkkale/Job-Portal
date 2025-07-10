import axios from 'axios'
const base_url="http://localhost:8080/"

const registerUser = async (user)=>{

  return axios.post(`${base_url}users/register`,user)
  .then(res=>res.data)
  .catch(error=>{throw error});



}


const loginUser = async (user)=>{

  return axios.post(`${base_url}users/login`,user)
  .then(res=>res.data)
  .catch(error=>{throw error});



}


export {registerUser, loginUser}
