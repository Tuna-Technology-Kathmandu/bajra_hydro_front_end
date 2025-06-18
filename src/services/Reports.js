import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_BASE_URL } from "../config/BaseApi";

export const ReportsApi = createApi({
    reducerPath: 'ReportsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: API_BASE_URL
    }),
    endpoints: (builder) => ({
        getReports: builder.query({
            query: (params) => ({
                url: '/reports',
                params: {
                    page: params.page,
                    limit: params.limit,
                    search: params.search
                }
            })
        })
    })
})

export const { useGetReportsQuery } = ReportsApi;
export default ReportsApi;