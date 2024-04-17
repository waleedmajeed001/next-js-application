import React from "react";
import Link from "next/link";

export default function Home() {
  return(
     <main className="p-5">
      <p className="font-bold">This is Home Page. I am a web developer if you see my all detailes click on infoButton</p>
      <p>Welcome to my corner of the web! Im a solo developer passionate about crafting digital
        experiences that make a difference. With no team to lean on, Im the captain of my ship,
        steering through the vast ocean of code and creativity.

        As a lone developer, I embrace challenges head-on, finding innovative solutions and
        bringing them to life through lines of code. From conceptualization to deployment,
        every aspect of my projects bears the mark of my dedication and expertise.

        Join me on this journey as I strive to push the boundaries of what possible, one
        project at a time. Let turn ideas into reality, together, one line of code at a time.
        Welcome to my world of solo development.</p>
      <div className="flex gap-5 flex-col mt-5">
      <Link href={"/dashboard/settings/Info"}>Info-Page</Link>
      <Link href={"/dashboard"}>Dashboard-Page</Link>
       </div>
      </main>
  )
}