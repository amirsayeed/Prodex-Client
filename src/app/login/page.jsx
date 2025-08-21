"use client";

import { signIn } from "next-auth/react";

export default function LoginPage() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="w-full max-w-md p-6 rounded-md shadow-md bg-white dark:bg-gray-800">
        <h2 className="text-2xl font-bold text-center mb-6 dark:text-gray-100">
          Login to your account
        </h2>

        {/* Social Login Buttons */}
        <button
          onClick={() => signIn("google", { callbackUrl: "/products" })}
          className="w-full flex items-center justify-center p-3 mb-4 space-x-2 border rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 dark:border-gray-600"
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
            <label htmlFor="email" className="block text-sm dark:text-gray-100">Email address</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="you@example.com"
              className="w-full px-3 py-2 border rounded-md dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-violet-500"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm dark:text-gray-100">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="*****"
              className="w-full px-3 py-2 border rounded-md dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-violet-500"
            />
          </div>

          <button
            type="button"
            className="w-full px-4 py-2 mt-2 font-semibold rounded-md bg-violet-600 text-white hover:bg-violet-700"
          >
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
}
