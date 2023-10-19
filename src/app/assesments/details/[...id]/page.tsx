import { getAllAdmins } from "@/components/actions/admins";
import { getParticularTest } from "@/components/actions/tests";
import {
  CheckCircle,
  FileCode,
  BarChart,
  Users2,
  Hourglass,
} from "lucide-react";
import React from "react";

const page = async ({ params }: { params: { id: string } }) => {
  console.log(params.id);
  const data = await getParticularTest(params.id);
  console.log("particular test data", data);
  const admins = await getAllAdmins(params.id);
  console.log("admins", admins);

  return (
    <div className="flex w-full p-4 ">
      <div className="w-1/2 h-80 text-white  space-y-3  bg-gray-300 p-4 rounded-3xl">
        <div className=" text-4xl font-semibold flex items-center gap-2 ">
          {data?.testDetails?.testName}
          <CheckCircle
            size={28}
            color="#2bcb0b"
            strokeWidth={1.75}
            aria-label="Published"
          />
        </div>
        <div className="  font-semibold flex items-end gap-2 ">
          <FileCode size={48} color="#3282cd" strokeWidth={1.75} />
          <div className="flex items-end gap-2">
            <span className=" text-3xl text-white font-bold">
              {data?.testDetails?.questionId?.length}
            </span>
            <span className=" mb-0.5 text-xl">Questions</span>
          </div>
        </div>
        <div className="  font-semibold flex items-end gap-2 ">
          <BarChart size={48} color="#3282cd" strokeWidth={1.75} />
          <div className="flex items-end gap-2">
            <span className=" mb-0.5 text-xl uppercase">
              {data?.testDetails?.status}
            </span>
          </div>
        </div>
        <div className="  font-semibold flex items-end gap-2 ">
          <Users2 size={48} color="#3282cd" strokeWidth={1.75} />
          <div className="flex items-end gap-2">
            <span className=" mb-0.5 text-3xl uppercase">
              {data?.testDetails?.candidates}
            </span>
            <span className=" mb-0.5 text-xl ">Taken</span>
          </div>
        </div>
        <div className="  font-semibold flex items-end gap-2 ">
          <Hourglass size={48} color="#3282cd" strokeWidth={1.75} />
          <div className="flex items-end gap-2">
            <span className={` font-bold uppercase`}>
              {parseInt(data?.testDetails?.testDuration?.substr(0, 2)) > 0
                ? `${data?.testDetails?.testDuration?.substr(0, 2)}Hour`
                : ""}
              {parseInt(data?.testDetails?.testDuration?.substr(3, 2)) > 0
                ? `${data?.testDetails?.testDuration?.substr(3, 2)}Minutes`
                : ""}
              {parseInt(data?.testDetails?.testDuration?.substr(6, 2)) > 0
                ? `${data?.testDetails?.testDuration?.substr(6, 2)}Seconds`
                : ""}
            </span>
          </div>
        </div>
        <div>
          <i className="fa-solid fa-users fa-2xl text-white"></i>
        </div>
      </div>
      <div className="w-1/2 bg-blue-400">{params.id}</div>
    </div>
  );
};

export default page;
