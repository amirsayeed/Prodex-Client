"use client";

import { signIn } from "next-auth/react";

export default function LoginPage() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-base-100 my-5">
      <div className="w-full max-w-md p-8 rounded-md shadow-lg border border-gray-200">
        <h2 className="text-2xl font-bold text-center mb-6">
          Login to your account
        </h2>

        {/* Social Login Buttons */}
        <button
          onClick={() => signIn("google", { callbackUrl: "/products" })}
          className="w-full flex items-center justify-center p-3 mb-4 space-x-2 border rounded-md text-white bg-[#4dbbe8]"
        >
          <span>Login with Google</span>
        </button>

        {/* OR Divider */}
        <div className="flex items-center w-full my-4">
          <hr className="w-full dark:text-gray-600" />
          <span className="px-3 dark:text-gray-600">OR</span>
          <hr className="w-full dark:text-gray-600" />
        </div>

        <form className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm">Email address</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="you@example.com"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="*****"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500"
            />
          </div>

          <button
            type="button"
            className="w-full px-4 py-2 mt-2 font-semibold rounded-md text-white bg-[#4dbbe8]"
          >
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
}
