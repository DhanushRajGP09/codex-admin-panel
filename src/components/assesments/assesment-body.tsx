import { IAssesment } from '@/components/lib/assesments.d';
import React from 'react'
import Assesments from './assesments';

const AssesmentBody:React.FC<{data:IAssesment[]}>=({data})=>{
    console.log("data............................",data[0]?.questionId)
    
    
  return (
    <div className='flex '>
        <div className='h-full w-1/5 hidden lg:block bg-emerald-500 '>
            
        </div>
        <div className='flex w-full flex-col mt-2'>
            <span className=' text-2xl text-white p-2 font-bold bg-emerald-400'>ONGOING TESTS</span>
            <Assesments data={data}/>
            {/* <span className=' text-2xl text-white p-2 font-bold bg-red-400'>COMPLETED TESTS</span>
            <Assesments data={dummydata}/>
            <span className=' text-2xl text-white p-2 font-bold bg-yellow-500'>DRAFT TESTS</span>
            <Assesments data={dummydata}/> */}
        </div>
       
            
        
        
       
    </div>
  )
}

export default AssesmentBody;