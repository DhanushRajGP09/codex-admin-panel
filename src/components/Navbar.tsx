"use client";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import { usePathname } from "next/navigation";

function AuthButton() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        {session?.user?.name || session?.user?.email} <br />
        <button
          onClick={() => {
            signOut();
          }}
        >
          {" "}
          Sign Out
        </button>
      </>
    );
  }
  return (
    <div >
      Not Signed in <br />
      <button
        onClick={() => {
          signIn();
        }}
      >
        {" "}
        Sign In
      </button>
    </div>
  );
}

export default function NavBar() {
  const pathName = usePathname();
  return (
    <div className="sticky w-full flex bg-gray-200 px-24 h-12 items-center gap-4">
     
      <div className="flex ">
        <ul className="flex gap-4 items-center">
          <Link href="/">
            <li className={pathName == "/" ? "text-red-600" : "text-gray-400"}>
              Home
            </li>
          </Link>
          <Link href="/protected">
            <li
              className={
                pathName == "/protected" ? "text-red-600" : "text-gray-400"
              }
            >
              Protected Route
            </li>
          </Link>
          <Link href="/assesments">
            <li
              className={
                pathName == "/assesments" ? "text-red-600" : "text-gray-400"
              }
            >
              Assesments
            </li>
          </Link>
        </ul>
      </div>
      <AuthButton />
    </div>
  );
}
