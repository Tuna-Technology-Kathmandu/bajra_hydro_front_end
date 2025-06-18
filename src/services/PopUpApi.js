import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_BASE_URL } from "../config/BaseApi";

export const PopUpApi = createApi ({
reducerPath:"PopUpApi",
baseQuery: fetchBaseQuery ({
    baseUrl: API_BASE_URL
}),
endpoints: (builder) => ({
    getPopUp: builder.query({
        query: (params = {}) => ({
            url: '/popup',
            params: {
                page: params.page,
                limit: params.limit,
            }
        })
    })
}) 
})

export const {useGetPopUpQuery} = PopUpApi;
export default PopUpApi;