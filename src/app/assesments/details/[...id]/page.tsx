import { getParticularTest } from '@/components/actions/tests'
import React from 'react'

const page = async({params}:{params:{id:string}}) => {
    console.log(params.id)
    const data = await getParticularTest(params.id);
console.log("particular test data",data)
  return (
    <div className='flex w-full p-4 ' >
        <div className='w-1/2 h-80 text-white bg-emerald-500 p-4 rounded-3xl'>
            <div className=' text-4xl font-semibold ' >{data?.testDetails?.testName}</div>
            <div>
            <i className="fa-solid fa-users fa-2xl text-white" ></i>
            </div>
        </div>
        <div className='w-1/2 bg-blue-400'>
        {params.id}

        </div>
 
    </div>
  )
}

export default page