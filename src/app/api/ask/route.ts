import { openai } from "@ai-sdk/openai";
import { streamText } from "ai";
import { NextRequest } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

// Define a type for the message structure
interface ChatMessage {
  role: string;
  content: string;
}

export async function POST(req: NextRequest) {
  try {
    // Check if user is authenticated
    const session = await getServerSession(authOptions);
    if (!session) {
      return new Response(
        JSON.stringify({ error: "Authentication required" }),
        {
          status: 401,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    // Parse the request body
    const { messages } = await req.json();

    // Create the stream
    const stream = await streamText({
      model: openai("gpt-3.5-turbo"),
      messages: messages.map((message: ChatMessage) => ({
        role: message.role,
        content: message.content,
      })),
      temperature: 0.7,
      maxTokens: 800,
    });

    // Use the built-in streaming response from Next.js
    // The AI SDK's streamText function returns an object compatible
    // with Response's body parameter when JSON stringified
    return Response.json(stream);
  } catch (error) {
    console.error("Error in ask API:", error);
    return new Response(
      JSON.stringify({ error: "Failed to process request" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
