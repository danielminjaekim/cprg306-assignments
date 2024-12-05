"use client";

import { useUserAuth } from "./_utils/auth-context";
import Link from "next/link";

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  const handleLogin = async () => {
    try {
      await gitHubSignIn();
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  const handleLogout = async () => {
    try {
      await firebaseSignOut();
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <main className="bg-gray-900 min-h-screen text-white flex flex-col items-center justify-center p-6">
      {!user ? (
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-bold">Welcome to the Shopping List App</h1>
          <p className="text-gray-400">Please log in to access your shopping list.</p>
          <button
            onClick={handleLogin}
            className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-700"
          >
            Login with GitHub
          </button>
        </div>
      ) : (
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-bold">Welcome, {user.displayName}!</h1>
          <p className="text-gray-400">Email: {user.email}</p>
          <div className="space-y-2">
            <Link
              href="/week-10/shopping-list"
              className="px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-700 block"
            >
              Go to Shopping List
            </Link>
            <button
              onClick={handleLogout}
              className="px-6 py-3 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-700"
            >
              Logout
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
