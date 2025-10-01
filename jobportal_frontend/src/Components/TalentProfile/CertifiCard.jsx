import React from 'react'
import { formatDate } from '../../Services/Utilities'

const CertifiCard = (certi) => {
  return (   

      <div className='flex justify-between'>
              <div className='flex gap-2 items-center'>
                <div className='p-2 bg-mine-shaft-800 rounded-md'><img className='h-7' src={`/src/assets/Icons/${certi.issuer}.png`} alt="" /></div>
                <div>
                  <div className='font-semibold'>{certi.name}</div>
                  <div className='text-sm text-mine-shaft-300 '>{certi.issuer} </div>
                </div>
              </div>
              <div className='flex flex-col items-end'>

                <div className='text-sm text-mine-shaft-300'>{formatDate(certi.issueDate)}</div>
                <div className='text-sm text-mine-shaft-300'>ID: {certi.certificateId}</div>


              </div>
            </div>


            
      
   
  )
}

export default CertifiCard
