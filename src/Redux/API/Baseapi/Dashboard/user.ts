import { baseapi } from "../baseapi";

type user = {
    id:number,
    name: string,
    email: string,
    phone: string,
    website: string,
    address?: { city: string } 

}
type QueryParams = {
  page: number
  limit: number
  search?: string
}
const userlistshow = baseapi.injectEndpoints({
  endpoints: (builder) => ({
    usersList: builder.query<{ data: user[]; total: number }, QueryParams>({
      // query: ({ page, limit, search }) => `/users?page=${page}&limit${limit}&search${search}`,
      query: () => '/users',
      transformResponse: (response: user[]) => ({
        data: response,
        total: response.length,
      }),
    }),
  }),
})

export const { useUsersListQuery } = userlistshow