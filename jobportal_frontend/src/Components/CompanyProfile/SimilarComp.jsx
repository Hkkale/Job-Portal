import React from 'react'
import CompanyCard from './CompanyCard'

const SimilarComp = () => {


  const similar=[
{
  name: "Meta",
 employees: 58604
},
{
  name: "Netflix",
 employees: 12800
},
{
  name: "Microsoft",
 employees: 221000
},
{
  name: "Adobe",
 employees: 29439
},
{
  name: "Google",
 employees: 181798
},
{
  name: "Spotify",
 employees: 8200
},
{
  name: "Amazon",
 employees: 1561000
},
{
  name: "Apple",
 employees: 164000
}
]

  return (
     <div className='w-1/5'>

      <div className='text-xl font-semibold mb-5 text-mine-shaft-100'>Similer Companies</div>


      <div className='flex flex-wrap flex-col gap-5 '>
        {

          similar.map((company,index)=>  <CompanyCard key ={index} {...company}/>)

        }
      </div>
      
    </div>
  )
}

export default SimilarComp
