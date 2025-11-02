import React from 'react'

const formatDate = (date) => {
  const options = { year: 'numeric', month: 'short' };
  return new Date(date).toLocaleDateString('en-US', options);
  
  
}

function timeAgo(inputTimeStr) {
  
  const time = new Date(inputTimeStr);

 

  const now = new Date();
  const seconds = Math.floor((now - time) / 1000);

  if (seconds < 5) return "just now";
  if (seconds < 60) return `${seconds} seconds ago`;

  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes} minutes ago`;

  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours} hours ago`;

  const days = Math.floor(hours / 24);
  if (days < 30) return `${days} days ago`;

  const months = Math.floor(days / 30);
  if (months < 12) return `${months} months ago`;

  const years = Math.floor(months / 12);
  return `${years} years ago`;
}


const getBase64 = (file)=>{

    return new Promise((resolve,reject)=>{
      const reader = new FileReader();
      reader.readAsDataURL(file)
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);

    })

}




const formatInterviewTime=(date)=>{
  
const dt = new Date(date);

return dt.toLocaleString("en-US", {
  year: "numeric",
  month: "long",   // August
  day: "numeric",  // 15
  hour: "numeric",
  minute: "2-digit",
  hour12: true     // AM/PM format
});


}


const openBase64PDF=(base64string)=>{

  const bytechar=atob(base64string);

  const byteNum = new Array(bytechar.length);
  for (let i = 0; i < bytechar.length; i++) {
    byteNum[i] = bytechar.charCodeAt(i);
  }

  const byteArray = new Uint8Array(byteNum);
  const file = new Blob([byteArray], { type: 'application/pdf' });
  const fileURL = URL.createObjectURL(file);
  window.open(fileURL,'_blank');



}
function formatInterviewTime2(dateString) {
  const date = new Date(dateString);

  // Format: e.g. "Fri, 31 October"
  const dateOptions = { weekday: 'short', day: 'numeric', month: 'long' };
  const formattedDate = date.toLocaleDateString('en-US', dateOptions);

  // Format: e.g. "3:52 AM"
  const timeOptions = { hour: 'numeric', minute: '2-digit', hour12: true };
  const formattedTime = date.toLocaleTimeString('en-US', timeOptions);

  return { formattedDate, formattedTime };
}

export {formatDate,timeAgo,getBase64,formatInterviewTime,openBase64PDF,formatInterviewTime2}
