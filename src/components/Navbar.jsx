"use client";

import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import { IoMdLogIn } from "react-icons/io";
import ProdexLogo from "./ProdexLogo";

export default function Navbar() {
  const { data: session } = useSession();

  const handleLogout = async () => {
    await signOut({ redirect: false });
  };

  const links = (
    <>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/products">Products</Link>
      </li>
    </>
  );

  return (
    <div className="bg-base-100 sticky top-0 z-50 shadow-md">
      <div className="navbar max-w-[1500px] mx-auto px-2 md:px-4">
        {/* Navbar Start */}
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-white dark:bg-gray-800 rounded-box z-50 mt-3 w-52 p-2 shadow text-lg font-medium"
            >
              {links}
            </ul>
          </div>
          <ProdexLogo/>
        </div>

        {/* Navbar Center */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-base font-medium">{links}</ul>
        </div>

        {/* Navbar End */}
        <div className="navbar-end">
          {session ? (
            <div className="dropdown dropdown-end">
              <div tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  {session.user?.image && <img src={session.user.image} alt={session.user.name} />}
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-white dark:bg-gray-800 rounded-box z-50 mt-3 w-52 p-2 shadow"
              >
                <li className="cursor-default select-none font-semibold px-4 py-2">
                  {session.user?.name}
                </li>
                <li>
                  <Link href="/dashboard/addProduct" tabIndex={-1}>
                    Dashboard
                  </Link>
                </li>
                <li>
                  <button onClick={handleLogout} className="w-full text-left" tabIndex={-1}>
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <Link
              href="/login"
              className="btn flex text-white bg-[#4dbbe8] p-2 text-sm rounded-md items-center gap-2"
            >
              <span>Login</span>
              <IoMdLogIn size={20} />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
