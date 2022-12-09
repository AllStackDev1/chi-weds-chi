import { resolver } from "@blitzjs/rpc"
import db from "db"
import { z } from "zod"

const DeleteUser = z.object({
  id: z.string(),
})

export default resolver.pipe(resolver.zod(DeleteUser), resolver.authorize(), async ({ id }) => {
  // TODO: in multi-tenant app, you must add validation to ensure correct tenant
  return await db.user.deleteMany({ where: { id } })
})
