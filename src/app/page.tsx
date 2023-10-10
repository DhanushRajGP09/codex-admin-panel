import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-end px-24 bg-white">
      <div className="absolute flex  justify-between items-center top-1/2 gap-12  ">
        <div className=" w-52 h-32 bg-white shadow-md">
          <Link href="/assesments">
          Assesments
          </Link>
            
        </div>
        <div className=" w-52 h-32 bg-white shadow-md">
            Library
        </div>
      </div>
      <div className="w-full bg-gray-200  rounded-t-full   h-[50vh]">

      </div>
      
    </main>
  );
}
