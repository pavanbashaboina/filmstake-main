import { createAdminRouter } from "./adminMiddleware.js"


export const setupAdmin = (app) => {
  const adminRouter = createAdminRouter()
  app.use('/admin', adminRouter)
}
