import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import {prisma} from "./prisma"

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "Email and Password",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "example@example.com",
        },
        password: { label: "Password", type: "password" },
      },
      
      async authorize(credentials) {
           if(!credentials?.email || !credentials?.password){
                   return null;
           }

    
           const user = await prisma.user.findUnique({where : {email : credentials?.email}});

           if(!user){  // add a check for the password as well.. 
             return null;
           }

           return {
            id  : user.id,
             name : user.name,
             email : user.email
           }
           
      },
    }),
  ],
};