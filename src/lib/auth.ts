import GithubProvider from "next-auth/providers/github";
import { AuthOptions } from "next-auth";
import { JWT } from "next-auth/jwt";
import { Session } from "next-auth";

// Extend the Session type to include accessToken
interface ExtendedSession extends Session {
  accessToken?: string;
}

// Extend the JWT type to include accessToken
interface ExtendedJWT extends JWT {
  accessToken?: string;
}

// Create a properly typed authOptions object
export const authOptions: AuthOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
    // Add more providers here if needed
  ],
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  callbacks: {
    async jwt({ token, account }) {
      // Persist the OAuth access_token to the token right after signin
      if (account) {
        token.accessToken = account.access_token;
      }
      return token as ExtendedJWT;
    },
    async session({ session, token }) {
      // Send properties to the client, like an access_token from a provider.
      const extendedSession = session as ExtendedSession;
      extendedSession.accessToken = (token as ExtendedJWT).accessToken;
      return extendedSession;
    },
    async redirect({ url, baseUrl }) {
      // Allows relative callback URLs
      if (url.startsWith("/")) return `${baseUrl}${url}`;
      // Allows callback URLs on the same origin
      else if (new URL(url).origin === baseUrl) return url;

      return baseUrl;
    },
  },
  pages: {
    signIn: "/auth/signin",
  },
};
