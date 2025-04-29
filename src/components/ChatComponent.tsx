import React from "react";
import { useChat } from "@ai-sdk/react";

export default function ChatComponent() {
  const { messages, input, handleInputChange, handleSubmit, isLoading } =
    useChat({
      api: "/api/ask", // Use our custom API endpoint
    });

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Chat with AI</h2>

      <div className="bg-gray-100 p-4 rounded-lg mb-4 min-h-64 max-h-96 overflow-y-auto">
        {messages.length === 0 ? (
          <p className="text-gray-500">
            Start a conversation by typing a message below.
          </p>
        ) : (
          messages.map((message) => (
            <div
              key={message.id}
              className={`mb-4 p-3 rounded-lg ${
                message.role === "user" ? "bg-blue-100 ml-12" : "bg-white mr-12"
              }`}
            >
              <p className="font-semibold">
                {message.role === "user" ? "You" : "AI"}
              </p>
              <p>{message.content}</p>
            </div>
          ))
        )}
        {isLoading && (
          <div className="bg-white p-3 rounded-lg mr-12 mb-4">
            <p className="font-semibold">AI</p>
            <p>Thinking...</p>
          </div>
        )}
      </div>

      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder="Type your message..."
          className="flex-1 p-2 border border-gray-300 rounded"
          disabled={isLoading}
        />
        <button
          type="submit"
          disabled={isLoading || !input.trim()}
          className="bg-blue-500 text-white py-2 px-4 rounded disabled:bg-blue-300"
        >
          Send
        </button>
      </form>
    </div>
  );
}
