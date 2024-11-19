import AdminJS from 'adminjs'
import AdminJSExpress from '@adminjs/express'
import { adminJsConfig } from './adminConfig.js'
import { authConfig } from './adminAuth.js'
import session from 'express-session'

export const createAdminRouter = () => {
  const adminJs = new AdminJS(adminJsConfig)
  
  const router = AdminJSExpress.buildAuthenticatedRouter(
    adminJs,
    authConfig,
    null,
    {
      resave: false,
      saveUninitialized: true,
      secret: process.env.ADMIN_COOKIE_SECRET || 'secret-key',
      cookie: {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production'
      }
    }
  )
  
  return router
}