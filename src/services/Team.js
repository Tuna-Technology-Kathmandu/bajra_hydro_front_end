import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_BASE_URL } from "../config/BaseApi";

export const TeamApi = createApi({
    reducerPath: 'TeamApi',
    baseQuery: fetchBaseQuery({
        baseUrl: API_BASE_URL
    }),
    endpoints: (builder) => ({
        getTeam: builder.query({
            query: (params = {}) => ({
                url: '/team',
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

export const { useGetTeamQuery } = TeamApi;
export default TeamApi;