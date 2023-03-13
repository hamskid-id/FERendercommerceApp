import React from 'react';
import { cartActions } from './store/cartslice';
import {useDispatch} from 'react-redux';
import { useGetAllProductsQuery } from './store/productsApi';

export const TopSellingSection =()=>{
    
   
    const dispatch = useDispatch() 
    const {data, error, isLoading} = useGetAllProductsQuery();
 
    const handleAddCart =(e)=>{
        const indProd = data.find((item) => item.id === e.id);
        dispatch(cartActions.addToCart({
            id:indProd.id,
            img:indProd.img,
            name:indProd.name,
            quantity: indProd.quantity,
            price: indProd.price,
            totalPrice:indProd.totalPrice
        }))
        dispatch(cartActions.setcartContent())

    }
    
    return(
        <>
        <div className='container top py-3 mt-3' style={{background:'ghostwhite'}}>
            <div className='row align-items-center py-1'>
                <div className='col-md-8'>
                    <p className='fw-bold fs-5'>Top Selling Items</p>
                </div>
            </div>
            <div>
                
                    {
                        isLoading?(
                            <div  className="spinner-border" style={{width: "3rem", height: "3rem"}}  role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        ):error?(
                            <p>An error occured...</p>
                        ):(
                            <>
                            <div className='selling'>
                             {
                                data.map((item,index)=>{
                                    const {name,img,price,id} = item;
                                    return(
                                        <div key={index} className='align-items-center justify-content-center'>
                                            <div className='bg bg-white m-3 p-2 rounded shadow'>
                                                <img className='w-100' src={img} alt="object not found"/>
                                                <div  className='my-2 text-center'>
                                                    <p className='my-0 prodName fw-bold '>{name}</p>
                                                    <p className='my-0 prodPrice'>$ {price}</p>
                                                    <button className='btn btn-sm cartbtn text-white' style={{fontSize:'12px',background:'darkblue'}} onClick={()=>handleAddCart({id})}>Add to cart</button>
                                                </div>

                                            </div>        
                                        </div>
                                    )
                                })
                               }

                            </div>
                             

                            </>
                        )
                    }
            </div>

        </div>
            
        </>
    )
}
