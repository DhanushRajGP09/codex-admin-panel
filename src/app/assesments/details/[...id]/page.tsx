import { getParticularTest } from '@/components/actions/tests'
import React from 'react'

const page = async({params}:{params:{id:string}}) => {
    console.log(params.id)
    const data = await getParticularTest(params.id);
console.log("particular test data",data)
  return (
    <div>{params.id}</div>
  )
}

export default page