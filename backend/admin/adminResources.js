import { GENRES } from "../models/movieModel.js"


export const movieResourceOptions = {
  properties: {
    bannerImage: {
      type: 'string',
      isVisible: {
        list: true,
        filter: true,
        show: true,
        edit: true,
      }
    },
    sideBanner: {
      type: 'string',
      isVisible: {
        list: true,
        filter: true,
        show: true,
        edit: true,
      }
    },
    'crew.director': {
      type: 'string',
    },
    'crew.writers': {
     
      isArray: true,
    },
    'crew.stars': {
    
      isArray: true,
    },
    genre: {
      availableValues: GENRES.map(genre => ({
        value: genre.value,
        label: genre.label,
      })),
    },
    createdAt: {
      isVisible: {
        list: true,
        filter: true,
        show: true,
        edit: false,
      },
    },
    updatedAt: {
      isVisible: {
        list: true,
        filter: true,
        show: true,
        edit: false,
      },
    },
  },
  actions: {
    new: {
      before: async (request) => {
        if (request.payload.genre && typeof request.payload.genre === 'string') {
          request.payload.genre = [request.payload.genre]
        }
        return request
      },
    },
    edit: {
      before: async (request) => {
        if (request.payload.genre && typeof request.payload.genre === 'string') {
          request.payload.genre = [request.payload.genre]
        }
        return request
      },
    },
  },
}
