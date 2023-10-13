"use client"
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

const AssesmentSearch = () => {

   const [name,setTestName] = useState("");
   const [data,setData] = useState([])
    const getAllTest=async()=>{
    const responseData = await fetch(`${window.location.origin}/api/alltests`);  
   
    
    }
    const router = useRouter();
    // console.log("data",data)

  return (
    <div className=' w-1/5  p-2 rounded-md border-2 border-emerald-400'>
      <input placeholder='Search Assesments'  onChange={ (e) => {
        setTestName(e.target.value);
        if(e.target.value == ""){
          router.replace(`/assesments`)
        }else{
          router.replace(`?search=${e.target.value}`,{scroll:true})
        }
         
       
      }} className=' appearance-none outline-none w-full'></input>
    </div>
    
  )
}

export default AssesmentSearch;