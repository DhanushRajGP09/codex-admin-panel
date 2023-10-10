"use client"
import React, { useState } from 'react'

const AssesmentSearch = () => {

   const [name,setTestName] = useState("");
   const [data,setData] = useState([])
    const getAllTest=async()=>{
    const responseData = await fetch(`${window.location.origin}/api/alltests`);  
   
    
    }
    // console.log("data",data)

  return (
    <input placeholder='Search Assesments'  onChange={ (e) => {
        setTestName(e.target.value);
        if (e.target.value === "") {
          getAllTest();
        } else {
        //   handleSearchTest(e.target.value);
        }
      }}></input>
  )
}

export default AssesmentSearch;