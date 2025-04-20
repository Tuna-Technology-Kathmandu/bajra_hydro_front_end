import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_BASE_URL } from "../config/BaseApi";

export const SingleBlogApi = createApi({
    reducerPath: 'SingleBlogApi',
    baseQuery: fetchBaseQuery({
        baseUrl: API_BASE_URL
    }),
    endpoints: (builder) => ({
        getSingleBlog: builder.query({
            query: (slug) => ({
                url: `/blogs/${slug}`
            })
        })
    })
})

export const { useGetSingleBlogQuery } = SingleBlogApi;
export default SingleBlogApi;