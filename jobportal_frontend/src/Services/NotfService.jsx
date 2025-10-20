
import axios from 'axios'
import axiosInstance from '../Interceptor/AxiosInterceptor';
const base_url="http://localhost:8080"








const getNotifications = async (id)=>{

  return axiosInstance.get(`/notification/get/${id}`)
  .then(res=>res.data)
  .catch(error=>{throw error});

}


const readNotification = async (id)=>{

  return axios.put(`${base_url}/read/${id}`)
  .then(res=>res.data)
  .catch(error=>{throw error});

}



export { getNotifications,readNotification}
