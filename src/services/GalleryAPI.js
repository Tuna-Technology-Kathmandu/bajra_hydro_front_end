import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API_BASE_URL } from '../config/BaseApi'

export const GalleryAPI = createApi({
    reducerPath: 'GalleryAPI',
    baseQuery: fetchBaseQuery({
        baseUrl: API_BASE_URL,
    }),
    endpoints: builder => ({
        getGalleryAPI: builder.query({
            query: (params = {}) => ({
                url: '/gallery',
                params: {
                    page: params.page,
                    limit: params.limit,
                },
            }),
        }),
    }),
})

export const { useGetGalleryAPIQuery } = GalleryAPI
export default GalleryAPI
