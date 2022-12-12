import { resolver } from "@blitzjs/rpc"
import db from "db"
import { z } from "zod"

const User = z.object({
  name: z.string(),
  email: z.string(),
  phone: z.string(),
  meal: z.string(),
})

const UpdateReservation = z.object({
  id: z.string(),
  users: z.array(User),
})

export default resolver.pipe(
  resolver.zod(UpdateReservation),
  resolver.authorize(),
  async ({ id, users }) => {
    // TODO: in multi-tenant app, you must add validation to ensure correct tenant
    return await db.reservation.update({ where: { id }, data: { users } })
  }
)
