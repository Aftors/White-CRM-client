import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'
import { IFabricator } from '../models/IFabricator'

export const fabricatorAPI = createApi({
  reducerPath: 'fabricatorAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:8443/fabricator/',
  }),
  endpoints: (build) => ({
    fetchAllFabricator: build.query<IFabricator[], ''>({
      query: () => ({
        url: '/get',
      }),
    }),
  }),
})
