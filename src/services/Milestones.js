import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_BASE_URL } from "../config/BaseApi";

export const MilestonesApi = createApi({
    reducerPath: 'MilestonesApi',
    baseQuery: fetchBaseQuery({
        baseUrl: API_BASE_URL
    }),
    endpoints: (builder) => ({
        getMilestones: builder.query({
            query: (params = {}) => ({
                url: '/milestones/',
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

export const { useGetMilestonesQuery } = MilestonesApi;
export default MilestonesApi;