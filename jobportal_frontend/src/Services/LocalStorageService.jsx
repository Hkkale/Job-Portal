import React from 'react'

const setItem = (key, value) => {

  localStorage.setItem(key,JSON.stringify(value));
 
}


const getItem = (key) => {

  const user=JSON.parse(localStorage.getItem(key))
  console.log("Getting user from local storage",user);

 return user; 
 
}


const removeItem = (key) => {

 localStorage.removeItem(key)
 
}







export {setItem,getItem,removeItem}

