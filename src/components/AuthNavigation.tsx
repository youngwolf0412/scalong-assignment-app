"use client";

import { signIn, signOut, useSession } from "next-auth/react";

export default function AuthNavigation() {
  const { data: session, status } = useSession();
  const isLoading = status === "loading";

  return (
    <div className="flex items-center space-x-4">
      {isLoading ? (
        <p>Loading...</p>
      ) : session ? (
        <div className="flex items-center space-x-4">
          <p className="text-sm text-gray-700">
            Signed in as
            <span className="font-medium">{session.user?.email}</span>
          </p>
          <button
            onClick={() => signOut({ callbackUrl: "/" })}
            className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
          >
            Sign out
          </button>
        </div>
      ) : (
        <button
          onClick={() => signIn()}
          className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Sign in
        </button>
      )}
    </div>
  );
}
