import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'
import { IOrder } from '../models/IOrder'

export const orderAPI = createApi({
  reducerPath: 'orderAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://localhost:9000',
  }),
  endpoints: (build) => ({
    createOrder: build.mutation<IOrder, IOrder>({
      query: (order) => ({
        url: `/order/create`,
        method: 'POST',
        body: order,
      }),
    }),
  }),
})
