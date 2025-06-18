import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_BASE_URL } from "../config/BaseApi";

export const ContactUsApi = createApi({
    reducerPath: 'ContactUsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: API_BASE_URL,
    }),
    endpoints: (builder) => ({
        contactUs: builder.mutation({
            query: (data) => ({
                url: '/contact',
                method: 'POST',
                body: data,
                headers: { 'Content-Type': 'application/json' }
            })
        })
    })
})
export const { useContactUsMutation } = ContactUsApi;