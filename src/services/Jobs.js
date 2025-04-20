import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_BASE_URL } from "../config/BaseApi";

export const JobsApi = createApi({
    reducerPath: 'JobsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: API_BASE_URL
    }),
    endpoints: (builder) => ({
        getJobs: builder.query({
            query: (params = {}) => ({
                url: '/jobs',
                params: {
                    page: params.page,
                    limit: params.limit,
                    sortOrder: params.sortOrder,
                    category_title: params.category_title,
                    search: params.search,
                    Is_featured: params.Is_featured

                }
            })
        })
    })
})

export const { useGetJobsQuery } = JobsApi;
export default JobsApi;