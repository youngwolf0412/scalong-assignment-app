"use client";

import AuthNavigation from "@/components/AuthNavigation";
import ChatComponent from "@/components/ChatComponent";
import { useSession } from "next-auth/react";

export default function Home() {
  const { status } = useSession();
  const isAuthenticated = status === "authenticated";

  return (
    <main className="flex min-h-screen flex-col items-center p-8">
      <div className="w-full max-w-5xl">
        <div className="flex w-full items-center justify-between mb-8">
          <h1 className="text-4xl font-bold">Scalong App</h1>
          <AuthNavigation />
        </div>

        {isAuthenticated ? (
          <div className="w-full">
            <ChatComponent />
          </div>
        ) : (
          <div className="mt-12 p-8 border rounded-lg bg-white shadow-sm">
            <h2 className="text-2xl font-semibold mb-4">
              Welcome to Chat with AI
            </h2>

            <p className="mb-4">
              <strong>To get started:</strong> Please sign in with your GitHub
              account to access the AI chat feature.
            </p>
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
              <p className="text-blue-800">
                Once authenticated, you'll be able to chat with an AI assistant
                powered by OpenAI technology.
              </p>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
