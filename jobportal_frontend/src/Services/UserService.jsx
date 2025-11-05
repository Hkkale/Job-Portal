import axiosInstance from "../Interceptor/AxiosInterceptor";


const registerUser = async (user)=>{

  return axiosInstance.post(`/users/register`,user)
  .then(res=>res.data)
  .catch(error=>{throw error});



}


const loginUser = async (user)=>{

  return axiosInstance.post(`/users/login`,user)
  .then(res=>res.data)
  .catch(error=>{throw error});



}

const sendOtp = async (email)=>{

  return axiosInstance.post(`/users/sendOtp/${email}`,)
  .then(res=>res.data)
  .catch(error=>{throw error});



}

const verifyOtp = async (email,otp)=>{

  return axiosInstance.get(`/users/verifyOtp/${email}/${otp}`,)
  .then(res=>res.data)
  .catch(error=>{throw error});



}

const ChangePassword = async (email,password)=>{

  return axios.post(`/users/changePass`,{email,password})
  .then(res=>res.data)
  .catch(error=>{throw error});



}


export {registerUser, loginUser, sendOtp,verifyOtp,ChangePassword}
