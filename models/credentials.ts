export default interface Credentials {
  jwt: string
  user: {
    id: number
    username: string
    email: string
    provider: string
    confirmed: true
    blocked: false
    role: {
      id: number
      name: string
      description: string
      type: string
    }
    created_at: string
    updated_at: string
  }
}
