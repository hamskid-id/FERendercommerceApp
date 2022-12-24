import { configureStore } from "@reduxjs/toolkit";
import cart_Slice from './cartslice';
import product_Slice, { productsFetch, shopsFetch, homeDealsFetch, adminProductsFetch} from "./productSlice";
import { productsApi } from "./productsApi";
import { homeApi } from "./productsApi";
import { shopsApi } from "./productsApi";
import auth_Slice, { loadUser } from './authslice'

const store = configureStore({
    reducer:{
        cart: cart_Slice.reducer,
        product: product_Slice.reducer,
        [productsApi.reducerPath]: productsApi.reducer,  
        [homeApi.reducerPath]: homeApi.reducer,  
        [shopsApi.reducerPath]: shopsApi.reducer,  
        auth: auth_Slice.reducer,
    },
    middleware:(getDefaultMiddleware)=>{
       return getDefaultMiddleware().concat([productsApi.middleware, shopsApi.middleware, homeApi.middleware])
    },
   

})

store.dispatch(productsFetch());
store.dispatch(adminProductsFetch())
store.dispatch(shopsFetch());
store.dispatch(homeDealsFetch());
store.dispatch(loadUser(null));
export default store;