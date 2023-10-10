import AssesmentsNavBar from '@/components/components/assesments/assesments-nav-bar'
import { getServerSession } from 'next-auth';
import {redirect} from "next/navigation"
import React from 'react'

const page:React.FC<{}> = async({}) =>{
    const session = await getServerSession();

    if(!session || !session.user){
        redirect("/api/auth/signin")
    }
    return (
    <div>
        <AssesmentsNavBar />
    </div>

    )
}

export default page;