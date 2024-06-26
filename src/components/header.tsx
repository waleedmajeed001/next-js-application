import React from "react";
import Link from "next/link";

function Header() {
  return (
    <div className="flex bg-red-500 p-3 gap-5">
         <Link href="/">Home</Link>
         <Link href="/dashboard">Dashboard</Link>
         <Link href="/blog">Blog</Link>
         <Link href="/contactus">Contact-us</Link>
         <Link href="/dashboard/analytics">Analytics</Link>
         <Link href="/dashboard/settings">Settings</Link>
         <Link href="/dashboard/settings/Password">Password</Link>
         <Link href="/dashboard/settings/Info">Info</Link>
    </div>
  );
}

export default Header;