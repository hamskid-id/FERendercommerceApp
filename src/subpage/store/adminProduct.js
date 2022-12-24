import React from 'react';
import {useSelector} from 'react-redux';


export const AdminSection =()=>{
    
   
   
    const {adminItem ,status }= useSelector((state)=>state.product)
    
    return(
        <>
        <div className='container top py-3 mt-3' style={{background:'ghostwhite'}}>
            <div className='row align-items-center py-1'>
                <div className='col-md-8'>
                    <p className='fw-bold fs-5'>Admin Products Created</p>
                </div>

            </div>
        
            <div className='row'>
                
                    {
                      status ==='success'?
                            
                                <div className='selling'>
                                {
                                   adminItem.map((item,index)=>{
                                       const {name,image,price} = item;
                                       return(
                                           <div key={index} className='obj-w align-items-center justify-content-center'>
                                               <div className='bg bg-white m-1 p-2 '>
                                                   <img className='w-100' src={image.url} alt="object not found"/>
                                                   <div  className='my-2 text-center'>
                                                       <p className='my-0 prodName fw-bold '>{name}</p>
                                                       <p className='my-0 prodPrice'>$ {price}</p>
                                                   </div>
   
                                               </div>        
                                           </div>
                                       )
                                   })
                                  }
   
                               </div>
                              :<p>No Products has been created </p>
                        
                    }
            </div>

        </div>
            
        </>
    )
}