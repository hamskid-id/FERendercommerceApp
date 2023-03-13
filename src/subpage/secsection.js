import React from 'react';
import { useGetAllShopsQuery } from './store/productsApi';
export const ShopSection =()=>{

    const {data, error, isLoading} = useGetAllShopsQuery();

    return(
        <>

        <div className='container top py-3' style={{background:'ghostwhite'}}>
        <div className='row align-items-center py-1'>
                <div className='col-md-8'>
                    <p className='fw-bold fs-5'>Top Selling Shops</p>
                </div>
                
            </div>
            <div className='row justify-content-center'>
                {
                    isLoading?(
                        <div  className="spinner-border" style={{width: "3rem", height: "3rem"}}  role="status">
                                <span className="visually-hidden">Loading...</span>
                        </div>
                    ):error?(
                        <p>An error occured...</p>
                    ):(
                        <>
                        {
                           data.map((shop,index)=>{
                                const {name,rating,product,img} = shop;
                                return(
                                    <div key={index} className='col-md-3'>
                                        <div className='bg bg-white shadow p-2 m-1 rounded '>
                                        <p className='my-0'>{name}</p>
                                        <div className='d-flex flex-row  align-items-center '>
                                            <div className='rating'>
                                                <span>
                                                    <img src="https://res.cloudinary.com/hamskid/image/upload/v1597840165/ajuaya/FavoriteStarFill_E735_vowpfu.PNG" alt="object not found"/>
                                                    <img src="https://res.cloudinary.com/hamskid/image/upload/v1597840165/ajuaya/FavoriteStarFill_E735_vowpfu.PNG" alt="object not found"/>
                                                    <img src="https://res.cloudinary.com/hamskid/image/upload/v1597840169/ajuaya/Vector3_dczz0v.PNG" alt="object not found"/>
                                                    <img src="https://res.cloudinary.com/hamskid/image/upload/v1597840169/ajuaya/Vector3_dczz0v.PNG" alt="object not found"/>
                                                    <span>{rating}</span>
                                                </span>
                                                <div className='d-flex flex-row w-50'>
                                                        { product.map((prod,index)=>{
                                                            return(
                                                                <div key={index} className='col-md-6'>
                                                                    <p className='shopProd badge m-1' style={{background:'darkblue'}}>{prod}</p>
                                                                </div>
                                                                )
                                                            }
                                                        )}
                                                
                                                </div>
                                            </div>
                                            <div className='ratingImg'>
                                                <img className='ms-auto' src={img} alt="object not found"/>
                                            </div>
                                        </div>

                                        </div>
                                        
                                    </div>
                                )
                            })
                        }
                    </>
                )
                }
               

            </div>

        </div>
            
        </>
    )
    
}