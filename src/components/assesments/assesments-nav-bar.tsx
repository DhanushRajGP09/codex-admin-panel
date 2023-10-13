import React from 'react'
import CreateTestButton from './create-test-button';
import AssesmentSearch from './assesment-search';

const AssesmentsNavBar = () => {

  return (
    <div className='sticky top-10 bg-white w-full px-4 py-5 items-center flex justify-between shadow-xl'>
            <span className='font-semibold text-emerald-400 text-2xl' >Assesments</span>
            <AssesmentSearch />
            <CreateTestButton />
    </div>
  )
}

export default AssesmentsNavBar;