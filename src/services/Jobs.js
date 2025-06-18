import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_BASE_URL } from "../config/BaseApi";

export const JobsApi = createApi({
    reducerPath: 'JobsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: API_BASE_URL
    }),
    endpoints: (builder) => ({
        getJobs: builder.query({
            query: ({ category, level, job_type, search, page, limit }) => {
                const params = new URLSearchParams();
                if (category) params.append('category', category);
                if (level) params.append('level', level);
                if (job_type) params.append('job_type', job_type);
                if (search) params.append('search', search);
                if (page) params.append('page', page);
                if (limit) params.append('limit', limit)

                return `jobs?${params.toString()}`;
            },
        }),
    }),
})

export const { useGetJobsQuery } = JobsApi;
export default JobsApi;