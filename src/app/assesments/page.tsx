import { getAllTest, getSearchTest } from "@/components/actions/tests";
import AssesmentsNavBar from "@/components/components/assesments/assesments-nav-bar";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";
import { authOptions } from "../api/auth/[...nextauth]/route";
import AssesmentBody from "@/components/components/assesments/assesment-body";

const page = async ({searchParams}:{searchParams:{search?:string}}) => {
    console.log("props..",searchParams)
  const session = await getServerSession(authOptions);

  if (!session || !session.user) {
    redirect("/api/auth/signin");
  }
  const data = await getAllTest();
  const sortBy=[
    {
        key:"testName",
        direction:"desc"
    }
  ]
  
  

  const searchdata = await searchParams?.search && getSearchTest(searchParams?.search,100,1,sortBy) ;

  console.log("searchdata........",searchdata)
  return (
    <div>
      <AssesmentsNavBar />
      <AssesmentBody data={data} />
    </div>
  );
};

export default page;
