
import Link from 'next/link';
import React from 'react'

const CreateTestButton = () => {
  return (
    <Link className='bg-emerald-400 rounded-md text-white p-2' href={`/assesments/create`}>CREATE TEST</Link>
  )
}

export default CreateTestButton;