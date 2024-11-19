// adminConfig.js
import AdminJS from 'adminjs'
import * as AdminJSMongoose from '@adminjs/mongoose'
import Movie from "../models/movieModel.js"
import { movieResourceOptions } from './adminResources.js'

// Register mongoose adapter
AdminJS.registerAdapter(AdminJSMongoose)

export const adminJsConfig = {
  resources: [{
    resource: Movie,
    options: movieResourceOptions,
  }],
  rootPath: '/admin',
  branding: {
    companyName: 'Movie Admin Panel',
    logo: false,
    softwareBrothers: false,
  }
}