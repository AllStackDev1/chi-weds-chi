import { resolver } from "@blitzjs/rpc"
import db from "db"
import { z } from "zod"
import crypto from "crypto"

const User = z.object({
  name: z.string(),
  email: z.string(),
  phone: z.string(),
  meals: z.array(z.string()).min(1),
})

const CreateReservation = z.object({
  users: z.array(User),
})

export default resolver.pipe(resolver.zod(CreateReservation), async ({ users }) => {
  const firstUser = users[0]
  const result = await db.user.findFirst({
    where: {
      email: firstUser?.email,
      OR: { phone: firstUser?.phone },
    },
  })
  if (!result) {
    const userAdmin = await db.user.create({
      data: {
        name: firstUser?.name as string,
        email: firstUser?.email,
        phone: firstUser?.phone,
      },
    })

    if (userAdmin) {
      const reservation = await db.reservation.create({
        data: {
          userId: userAdmin.id,
          reserveNo: crypto.randomBytes(4).toString("hex"),
          users: { set: users },
        },
      })
      if (reservation) {
        return reservation
      }
    }

    return "Something went wrong"
  } else {
    return `User with email ${firstUser?.email} or phone ${firstUser?.phone} already exists`
  }
})
