import React from 'react';
import { collectionRoute } from './collectionroute';
import {Link} from 'react-router-dom';


export const ProductCollections =()=>{
    return(
        <>
             <div className='container  py-3 mt-3' style={{background:'ghostwhite'}}>
                <p className='text-center fw-bold shopCollection p-2 text-dark'>Shop From our collections!</p>
                <div className='row '>
                    {
                        collectionRoute.map((collection,index)=>{
                            const {name,img} = collection;
                            return(
                                <div key={index} className='col-md-2 col-sm-6'>
                                    <Link className='text-decoration-none text-dark' to='/collection'>
                                        <div className='row align-items-center justify-content-center'>
                                            <div className=' w-100'>
                                                <img className='w-100' src={img} alt="object not found"/>
                                            </div>
                                            <div>
                                                <p className='text-center'>{name}</p>

                                            </div>    
                                        </div>
                                    </Link>
                                </div>
                            )
                        })
                    }
                </div>
                
             </div>
        </>
    )
}
