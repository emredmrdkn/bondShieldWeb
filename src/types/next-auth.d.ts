import NextAuth, { DefaultSession } from 'next-auth'

declare module 'next-auth' {
  interface Session {
    user: {
      id: string
      role: 'TENANT' | 'LANDLORD' | 'AGENT'
    } & DefaultSession['user']
  }
  interface User {
    id: string
    role: 'TENANT' | 'LANDLORD' | 'AGENT'
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    role?: 'TENANT' | 'LANDLORD' | 'AGENT'
  }
}
export {}
