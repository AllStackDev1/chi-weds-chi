import { resolver } from "@blitzjs/rpc"
import db from "db"
import { z } from "zod"

const CreateUser = z.object({
  name: z.string(),
  email: z.string(),
  phone: z.string(),
})

export default resolver.pipe(resolver.zod(CreateUser), resolver.authorize(), async (input) => {
  // TODO: in multi-tenant app, you must add validation to ensure correct tenant
  return await db.user.create({ data: input })
})
