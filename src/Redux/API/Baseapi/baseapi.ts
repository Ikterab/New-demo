import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const baseapi = createApi({
  reducerPath: 'baseApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com/',
  }),
  endpoints: () => ({}),
})
