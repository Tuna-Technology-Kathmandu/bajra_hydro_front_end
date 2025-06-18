import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_BASE_URL } from "../config/BaseApi";

export const BlogApi = createApi({
    reducerPath: 'BlogApi',
    baseQuery: fetchBaseQuery({
        baseUrl: API_BASE_URL
    }),
    endpoints: (builder) => ({
        getBlogs: builder.query({
            query: (params) => ({
                url: '/blogs',
                params: {
                    page: params.page,
                    limit: params.limit,
                    sortOrder: params.sortOrder,
                    category: params.category,
                    search: params.search,
                    Is_featured: params.Is_featured,
                    id: params.id,
                    search: params.search

                }
            })
        })
    })
})

export const { useGetBlogsQuery } = BlogApi;
export default BlogApi;