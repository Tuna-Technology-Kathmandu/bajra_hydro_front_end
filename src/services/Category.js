import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_BASE_URL } from "../config/BaseApi";

export const CategoryApi = createApi({
    reducerPath: 'CategoryApi',
    baseQuery: fetchBaseQuery({
        baseUrl: API_BASE_URL
    }),
    endpoints: (builder) => ({
        getCategory: builder.query({
            query: (params) => ({
                url: '/categories',
                params: {
                    search: params.search
                }
            })
        })
    })
})

export const { useGetCategoryQuery } = CategoryApi;
export default CategoryApi;