import { DefaultSession, DefaultUser } from "next-auth";
import { GoogleProfile } from "next-auth/providers/google";

// Extend NextAuth's User type to include custom fields
declare module "next-auth" {
  interface User extends DefaultUser {
    role?: string; // Add role field
    emailVerified?: Date | null; // Add emailVerified field
  }

  interface Session {
    user: {
      id: number; // Add id field
      role?: string; // Add role field
    } & DefaultSession["user"];
  }

  // You can also extend other types if needed
  interface Profile extends GoogleProfile {}
}

export {}