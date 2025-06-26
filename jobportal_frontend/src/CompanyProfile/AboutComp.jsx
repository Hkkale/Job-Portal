import React from 'react'

const AboutComp = () => {
  const companyData={
    Name: "Google",
    Overview: "Google is a global leader in technology, specializing in internet-related services and products. Our mission is to organize the world’s information and make it universally accessible and useful. Founded by Larry Page and Sergey Brin, Google has grown into one of the most influential companies in the world, providing innovative tools and services that help billions of people across the globe.",
    Industry: "Internet, Software & Technology Services",
    Website: "https://www.google.com",
    Size: "100,000+ Employees",
    Headquarters: "Mountain View, California, United States",
    Specialties: [
      "Search Engine",
      "Online Advertising",
      "Cloud Computing",
      "Software",
      "Hardware",
      "AI & Machine Learning",
      "Mobile Operating Systems",
      "Consumer Electronics"
    ]
  }
  return (
    <div className='flex flex-col gap-5'>
      {
        Object.keys(companyData).map((key,index)=> key!=='Name' &&<div key={index}>


          <div className='text-xl mb-3 font-semibold'>{key}</div>
          {key!=='Website' && <div className='text-sm text-mine-shaft-300 text-justify'>{key != "Specialties" ? companyData[key]: companyData[key].map((item,i)=><span key={i}> &bull; {item}</span>)}</div>}
          {key==='Website' && <a href={companyData[key]} target="_blank" className='text-sm text-bright-sun-400 text-justify'>{companyData[key]}</a>}




        </div>)
      }
    </div>
  )
}

export default AboutComp
