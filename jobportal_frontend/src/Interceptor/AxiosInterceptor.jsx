import axios from "axios";


const axiosInstance=axios.create({
  baseURL: "http://localhost:8080",
});


axiosInstance.interceptors.request.use((config)=>{
  const token=localStorage.getItem("token");
  if(token){
    config.headers.Authorization=`Bearer ${token}`;
  }
  return config;
},
(error)=>{
  return Promise.reject(error);
})

export default axiosInstance;



// eyJhbGciOiJIUzI1NiJ9.eyJhY2NvdW50VHlwZSI6IkFQUExJQ0FOVCIsIm5hbWUiOiJIaXRlbmRyYSBLYWxlIiwiaWQiOjEsInN1YiI6IkhpdGVuZHJha2FsZTAwMEBnbWFpbC5jb20iLCJpYXQiOjE3NjA5NzI1NDQsImV4cCI6MTc2MTAwODU0NH0.VWnmLhbqMPs9JJkvrCOVmurRXeO-B-gdMTDagD9ZXYM


// eyJhbGciOiJIUzI1NiJ9.eyJhY2NvdW50VHlwZSI6IkFQUExJQ0FOVCIsIm5hbWUiOiJIaXRlbmRyYSBLYWxlIiwiaWQiOjEsInN1YiI6IkhpdGVuZHJha2FsZTAwMEBnbWFpbC5jb20iLCJpYXQiOjE3NjA5NzI1NDQsImV4cCI6MTc2MTAwODU0NH0.VWnmLhbqMPs9JJkvrCOVmurRXeO-B-gdMTDagD9ZXYM