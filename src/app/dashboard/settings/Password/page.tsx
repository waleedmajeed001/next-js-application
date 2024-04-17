import React from "react";
import Link from "next/link";

  export default function Password() {
    return(
    <main className="p-5">
    <p className="front-itlic"> This is password page🤗 </p>
    <div className="flex gap-5 flex-col mt-5">
      <div className="flex bg-red-500 p-3 gap-5"><Link href={""}>This is Your Gmail</Link></div>
      <Link href={""}>waleedmajeed123@gmail.com</Link>
      <div className="flex bg-red-500 p-3 gap-1"><Link href={""}>This is Your Password</Link></div>
      <Link href={""}>.......</Link>
    </div>
    </main>
    )
  }
