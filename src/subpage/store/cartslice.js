import { createSlice} from '@reduxjs/toolkit';
import { toast } from 'react-toastify';


const cart_Slice = createSlice({
    name:'cart',
    initialState: {
        cartContent: localStorage.getItem('ecommerce-cartItems') ? JSON.parse(localStorage.getItem('ecommerce-cartItems')):[],
        totalPrice:0,
        Subtotal:0,
        cartEmpty:false
    },
    reducers:{
        addToCart(state,action){
            const newitem = action.payload;
            const existingItem = state.cartContent.find((item) => item.id === newitem.id)
            if(existingItem){
                existingItem.quantity++;
                existingItem.totalPrice = existingItem.price*existingItem.quantity
               toast.success('Item amount succesffuly increased',{
                position:"bottom-left"
               })
               
            }else{
                state.cartContent.push({
                    id:newitem.id,
                    img:newitem.img,
                    name:newitem.name,
                    quantity: newitem.quantity,
                    price: newitem.price,
                    totalPrice:newitem.totalPrice
                });
               toast.success('Item Succesfully Added',{
                    position:"bottom-left",
                 })
               
            }
           
            
            localStorage.setItem('ecommerce-cartItems',JSON.stringify(state.cartContent));

        },
        removeFromCart(state,action){
            const itemToRemoveProp = action.payload;
            const itemToRemove = state.cartContent.find((item)=>item.id === itemToRemoveProp.id)
          
            if(itemToRemove.quantity !== 1){
                itemToRemove.quantity--;
               itemToRemove.totalPrice -= itemToRemoveProp.price;
               toast.success('cart Item succesffuly decreased',{
                position:"bottom-left",
               })
             
            }else{
                state.cartContent = state.cartContent.filter((item)=>item.id !== itemToRemove.id)
                toast.success('cart Item succesffuly Removed',{
                    position:"bottom-left",
                })
               
            }
            localStorage.setItem('ecommerce-cartItems',JSON.stringify(state.cartContent));
        },
        updateSubtotal(state,action){
            const updatedtotal= action.payload;
            state.Subtotal = updatedtotal.totalamount;
        },
        setcartContent(state,action){
            if(state.cartContent.length < 1){
                state.cartEmpty = true;
            }
        }
    },
  
})
export const cartActions = cart_Slice.actions;
export default cart_Slice;