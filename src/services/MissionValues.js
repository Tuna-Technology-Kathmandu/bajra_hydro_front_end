import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_BASE_URL } from "../config/BaseApi";

export const MissionValuesApi = createApi({
    reducerPath: 'MissionValuesApi',
    baseQuery: fetchBaseQuery({
        baseUrl: API_BASE_URL
    }),
    endpoints: (builder) => ({
        getMissionValues: builder.query({
            query: (params = {}) => ({
                url: '/mission-vision',
                params: {
                    page: params.page,
                    limit: params.limit,
                }
            })
        })
    })
})

export const { useGetMissionValuesQuery } = MissionValuesApi;
export default MissionValuesApi;