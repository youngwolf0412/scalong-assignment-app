import NextAuth from "next-auth";
import { authOptions } from "@/lib/auth";

// Create handler
const handler = NextAuth(authOptions);

// Export the handler functions for API routes
export { handler as GET, handler as POST };
