import React from 'react'
import CreateTestButton from './create-test-button';
import AssesmentSearch from './assesment-search';

const AssesmentsNavBar = () => {

  return (
    <div className='w-full px-2 py-5 items-center flex justify-between shadow-xl'>
            <span className='font-bold text-blue-500' >Assesments</span>
            <AssesmentSearch />
            <CreateTestButton />
    </div>
  )
}

export default AssesmentsNavBar;