import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_BASE_URL } from "../config/BaseApi";

export const CompanyInfoApi = createApi({
    reducerPath: 'CompanyInfoApi',
    baseQuery: fetchBaseQuery({
        baseUrl: API_BASE_URL
    }),
    endpoints: (builder) => ({
        getCompanyInfo: builder.query({
            query: (params = {}) => ({
                url: '/company-info',
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

export const { useGetCompanyInfoQuery } = CompanyInfoApi;
export default CompanyInfoApi;