import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_BASE_URL } from "../config/BaseApi";

export const SubscriberApi = createApi({
    reducerPath: 'SubscriberApi',
    baseQuery: fetchBaseQuery({
        baseUrl: API_BASE_URL
    }),
    endpoints: (builder) => ({
        subscribeEmail: builder.mutation({
            query: (data) => ({
                url: '/subscribers',
                method: 'POST',
                body: data,
                headers: { 'Content-Type': 'application/json' },
            })
        })
    })
})

export const { useSubscribeEmailMutation } = SubscriberApi;