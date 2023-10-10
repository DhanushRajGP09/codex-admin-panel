"use client";

import React from 'react'

const CreateTestButton = () => {
  return (
    <button className='bg-blue-500 rounded-md text-white p-2' onClick={()=>console.log("test creation started")}>CREATE TEST</button>
  )
}

export default CreateTestButton;