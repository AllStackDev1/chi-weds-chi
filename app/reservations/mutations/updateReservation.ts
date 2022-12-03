import { resolver } from "@blitzjs/rpc"
import db from "db"
import { z } from "zod"

const UpdateReservation = z.object({
  id: z.number(),
  name: z.string(),
})

export default resolver.pipe(
  resolver.zod(UpdateReservation),
  resolver.authorize(),
  async ({ id, ...data }) => {
    // TODO: in multi-tenant app, you must add validation to ensure correct tenant
    const reservation = await db.reservation.update({ where: { id }, data })

    return reservation
  }
)
