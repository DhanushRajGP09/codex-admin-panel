import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import { apiURLs } from "@/components/utiils/config";
import { JWT } from "next-auth/jwt";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Username:",
          type: "text",
          placeholder: "your-cool-username",
        },
        password: {
          label: "Password:",
          type: "password",
          placeholder: "Your awesome password",
        },
      },

      async authorize(credentials) {
        const { email, password } = credentials as any;
        const res = await fetch(`${apiURLs.login}`, {
          method: "POST",
          headers: {
            accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email || "",
            password: password || "",
          }),
        });

        const user = await res.json();
        if (res.ok && user) {
          return user;
        }

        return Promise.reject(new Error(user?.errors));
      },
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID ?? "",
      clientSecret: process.env.GITHUB_SECRET ?? "",
    }),
  ],
  sessions:{
    strategy: "jwt",
  },
  callbacks:{
    async jwt({token,user}:any){
      if(user) return {...token,...user}
      return token;
    },
    async session({token,session}:{token:JWT,session:any}){
      session.userdata = token.data;
      session.backendToken = token?.data?.refreshToken;
      return session
    }
  }

};

export const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
