import React from 'react';

import { TopHomeSection } from './homeSale';
import  SimpleSlider  from './productslider';
import { ShopSection } from './secsection';
import { AdminSection } from './store/adminProduct';
import { TopSellingSection } from './topselling';
export const ProductDetailSection =()=>{

    

    
   
    return(
        <>
             <div className='container-fluid'>
                <ShopSection/>
                <SimpleSlider/>
                <TopSellingSection/>
                <TopHomeSection/>
                <AdminSection/>
             </div>
        </>
       
    )
}
        