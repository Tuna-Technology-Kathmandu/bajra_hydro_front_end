import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_BASE_URL } from "../config/BaseApi";

export const CeoApi = createApi({
    reducerPath: 'CeoApi',
    baseQuery: fetchBaseQuery({
        baseUrl: API_BASE_URL
    }),
    endpoints: (builder) => ({
        getCeo: builder.query({
            query: (params) => ({
                url: '/ceo-message',
                params: {
                    page: params.page,
                    limit: params.limit,
                    sortOrder: params.sortOrder,
                    category_title: params.category_title,
                    search: params.search,
                    Is_featured: params.Is_featured,
                    position: params.position,

                }
            })
        })
    })
})

export const { useGetCeoQuery } = CeoApi;
export default CeoApi;