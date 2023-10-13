import NextAuth from "next-auth";
import { JWT } from "next-auth/jwt";

declare module "next-auth"{
    interface Session{
        status: number,
        message: string,
        data: {
          _id: string,
          email: string,
          password: string,
          loginCount: number,
          isSuperAdmin: boolean,
          isAdmin: boolean,
          branch: string,
          year: number,
          emailStatus: string,
          createdAt: string,
          updatedAt: string,
          __v: number,
          refreshToken:string;
        }

    }
}

declare module "next-auth/jwt"{
    interface JWT{ status: number,
        message: string,
        data: {
          _id: string,
          email: string,
          password: string,
          loginCount: number,
          isSuperAdmin: boolean,
          isAdmin: boolean,
          branch: string,
          year: number,
          emailStatus: string,
          createdAt: string,
          updatedAt: string,
          __v: number,
          refreshToken:string;
        }}
}