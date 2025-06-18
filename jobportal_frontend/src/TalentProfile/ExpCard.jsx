import React from 'react'

const ExpCard = (exp) => {
  return (
    <div className='flex flex-col gap-1'>

      <div className='flex justify-between'>
              <div className='flex gap-2 items-center'>
                <div className='p-2 bg-mine-shaft-800 rounded-md'><img className='h-7' src={`./src/assets/Icons/${exp.company}.png`} alt="" /></div>
                <div>
                  <div className='font-semibold'>{exp.title}</div>
                  <div className='text-sm text-mine-shaft-300 '>{exp.company} &bull; {exp.location}</div>
                </div>
              </div>
              <div className='text-sm text-mine-shaft-300'>

                {exp.startDate} - {exp.endDate}


              </div>
            </div>


            <div className='text-sm text-mine-shaft-300 text-justify'>{exp.description}</div>

      
    </div>
  )
}

export default ExpCard
