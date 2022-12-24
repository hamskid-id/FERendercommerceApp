import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
export const productsApi = createApi({
    reducerPath:"productsApi",
    baseQuery: fetchBaseQuery({baseUrl:"https://warm-gorge-13303.herokuapp.com"}),
    endpoints:(builder)=>({
        getAllProducts: builder.query({
            query: ()=> "topSellingProducts",
        }),
    }),
});
export const shopsApi = createApi({
    reducerPath:"shopsApi",
    baseQuery: fetchBaseQuery({baseUrl:"https://warm-gorge-13303.herokuapp.com"}),
    endpoints:(builder)=>({
        getAllShops: builder.query({
            query: ()=> "topSellingShops",
        }),
    }),
});
export const homeApi = createApi({
    reducerPath:"homeApi",
    baseQuery: fetchBaseQuery({baseUrl:"https://warm-gorge-13303.herokuapp.com"}),
    endpoints:(builder)=>({
        getAllDeals: builder.query({
            query: ()=> "topSellingDeals",
        }),
    }),
});

export const {useGetAllProductsQuery} = productsApi;
export const {useGetAllDealsQuery} = homeApi;
export const {useGetAllShopsQuery} = shopsApi;