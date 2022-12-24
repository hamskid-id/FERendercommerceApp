import React from 'react';
import AutoPlay from './firstSection';
import { Footer } from './footer';
import { ProductDetailSection } from './productDetail';
export const Main =()=>{
    return(
        <>
           <AutoPlay/>
            <ProductDetailSection/>
            <Footer/>
        </>
        
    )
}