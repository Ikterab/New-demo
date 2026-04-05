import { baseapi } from "../baseapi";

const userlistshow = baseapi.injectEndpoints({
    endpoints: (builder) => ({
        usersList: builder.query({
            query:()=>'users',
        })

    })
})

export const { useUsersListQuery } = userlistshow