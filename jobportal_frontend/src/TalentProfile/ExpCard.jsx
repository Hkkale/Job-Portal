import React from 'react'

const ExpCard = () => {
  return (
    <div className='flex flex-col gap-1'>

      <div className='flex justify-between'>
              <div className='flex gap-2 items-center'>
                <div className='p-2 bg-mine-shaft-800 rounded-md'><img className='h-7' src={`./src/assets/Icons/Google.png`} alt="" /></div>
                <div>
                  <div className='font-semibold'>Software Engineer</div>
                  <div className='text-sm text-mine-shaft-300 '>Google &bull; New York, United States</div>
                </div>
              </div>
              <div className='text-sm text-mine-shaft-300'>

                Jan 2022 - Present


              </div>
            </div>


            <div className='text-sm text-mine-shaft-300 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quam error, quia delectus quo, temporibus eius ratione inventore vitae esse iste enim! Nobis beatae earum exercitationem corrupti natus facilis corporis officia, fugit tenetur.</div>

      
    </div>
  )
}

export default ExpCard
