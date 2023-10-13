import { IAssesment } from '@/components/lib/assesments.d';
import Link from 'next/link';
import React from 'react'

const Assesments:React.FC<{data: IAssesment[]}>=({data}) =>{

  return (
    <div className='h-full w-full  flex mt-1 p-2  gap-3 flex-wrap '>

    {
        data.map((item:IAssesment,index:number)=>{
            return (
                <div className='sm:basis-1/3-gap-4   bg-white shadow-lg p-2 rounded-lg  border-[1px] border-emerald-400 '>
                    <Link className=' ' href={`/assesments/details/${item._id}`}>
                        {item.testName}
                    </Link>

                    <div className='flex font-medium gap-1'>
                        <span>Status: </span>
                        <span className={`${item.status == "ongoing" ? "text-emerald-500" : "text-red-500"} font-bold uppercase`}>
                        {item.status}
                    </span>
                    </div>
                  
                    <div className='flex font-medium gap-1'>
                        <span>Total candidates: </span>
                        <span className={`${item.status == "ongoing" ? "text-emerald-500" : "text-red-500"} font-bold uppercase`}>
                        {item.candidates}
                    </span>
                    </div>
                    <div className='flex font-medium gap-1'>
                        <span>Start date: </span>
                        <span className={`${item.status == "ongoing" ? "text-emerald-500" : "text-red-500"} font-bold uppercase`}>
                        {item.testStartDate.substr(0,10)}
                    </span>
                    </div>
                    <div className='flex font-medium gap-1'>
                        <span>End date: </span>
                        <span className={`${item.status == "ongoing" ? "text-emerald-500" : "text-red-500"} font-bold uppercase`}>
                        {item.testEndDate.substr(0,10)}
                    </span>
                    </div>
                    <div className='flex font-medium gap-1'>
                        <span>total duration: </span>
                        <span className={`${item.status == "ongoing" ? "text-emerald-500" : "text-red-500"} font-bold uppercase`}>
                        { parseInt(item?.testDuration?.substr(0,2)) > 0 ? `${item?.testDuration?.substr(0,2)}Hour` : ""}
                        {parseInt(item?.testDuration?.substr(3,2)) > 0 ? `${item?.testDuration?.substr(3,2)}Minutes` : ""}
                        {parseInt(item?.testDuration?.substr(6,2)) > 0 ? `${item?.testDuration?.substr(6,2)}Seconds` : ""}
                    </span>
                    </div>
                    <div>
                        
                    </div>
                   
                    
               
                </div>
            )
        })
    }
    </div>
  )
}

export default Assesments;