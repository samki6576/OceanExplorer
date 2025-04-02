
declare module "next-auth" {
  interface Session {
    user: {
      id?: string
      name?: string | null
      email?: string | null
      image?: string | null
    }
  }
// eslint-disable-next-line @typescript-eslint/no-unused-expressions
}`  `