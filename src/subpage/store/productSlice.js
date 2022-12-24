import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';
import {setHeaders, url} from './api';



export const productsCreate= createAsyncThunk(
    "products/productsCreate",
    async(values)=>{
        try{
            const response = await axios.post(
                `${url}/products`,
                 values,
                 setHeaders()
                 )
               
            return response?.data;
        }catch(error){
            console.log(error)
                toast.success("sorry coudnt create a product",{
                    position:"top-left",
                })
        }
    }
)
export const adminProductsFetch = createAsyncThunk(
    "products/adminProductsFetch",
    async(state,action)=>{
       const response = await axios.get("https://webcommerce-api.onrender.com/api/products");
       return response?.data
    }
)



const product_Slice = createSlice({
    name:'product',
    initialState: {
        items:[],
        adminItem:[],
        status:null,
        createStatus:null,
    },
    
    reducers:{
    },
    extraReducers:{
        [productsCreate.pending]:(state,action)=>{
            state.createStatus = 'pending'
            console.log(state.createStatus)
        },
        [productsCreate.fulfilled]:(state,action)=>{
            state.items.push(action.payload) 
            state.createStatus = 'success'
            console.log(state.createStatus)
        },
        [productsCreate.rejected]:(state,action)=>{
            state.createStatus = 'rejected'
            console.log(state.createStatus)
           
        },
        
        [adminProductsFetch.pending]:(state,action)=>{
            state.status = 'pending'
        },
        [adminProductsFetch.fulfilled]:(state,action)=>{
            state.status = 'success'
           state.adminItem = action.payload
        },
        [adminProductsFetch.rejected]:(state,action)=>{
            state.status = 'rejected'
           
        },
    }
  
})


export const homeDealsFetch = createAsyncThunk(
    "products/homeDealsFetch",
    async()=>{
       const response = await axios.get("https://webcommerce-api.onrender.com/topSellingDeals");
       return response?.data;
    }
)

export const shopsFetch = createAsyncThunk(
    "products/shopsFetch",
    async()=>{
       const response = await axios.get("https://webcommerce-api.onrender.com/topSellingShops");
       return response?.data;
    }
)
export const productsFetch = createAsyncThunk(
    "products/productsFetch",
    async()=>{
       const response = await axios.get("https://webcommerce-api.onrender.com/topSellingProducts");
       return response?.data;
    }
)


export const productActions = product_Slice.actions;
export default product_Slice;