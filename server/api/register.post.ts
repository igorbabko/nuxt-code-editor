import { users } from '../database/schema'

export default defineEventHandler(async (event) => {
  return useDrizzle()
    .insert(users)
    .values({
      email: 'jane@example.com',
      password: await hashPassword('password'),
    })
    .returning({
      id: users.id,
      email: users.email,
    })
    .get()
})
