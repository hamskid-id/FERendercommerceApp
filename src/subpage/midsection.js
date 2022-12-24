import React from 'react';
export const MidSection =()=>{
   
    return(
        <>
          <div id="carouselExampleControlsNoTouching" className="carousel slide mb-4 px-5 " data-bs-touch="false" data-bs-interval="false">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://res.cloudinary.com/hamskid/image/upload/v1655990878/Recipe/lp5_fnmruk.jpg" className="d-block w-100 slideImg" alt="objcet not found"/>
                        <img src="https://res.cloudinary.com/hamskid/image/upload/v1655990858/Recipe/insta1_usj0xf.jpg" className="d-block w-100 slideImg" alt="objcet not found"/>
                        <img src="https://res.cloudinary.com/hamskid/image/upload/v1655990861/Recipe/insta3_wzbokl.jpg" className="d-block w-100 slideImg" alt="objcet not found" />
                        <img src="https://res.cloudinary.com/hamskid/image/upload/v1655990861/Recipe/insta4_aydxn6.jpg" className="d-block w-100 slideImg" alt="objcet not found" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://res.cloudinary.com/hamskid/image/upload/v1655990867/Recipe/insta5_lj26uy.jpg" className="d-block w-100 slideImg" alt="objcet not found" />
                        <img src="https://res.cloudinary.com/hamskid/image/upload/v1655990878/Recipe/lp5_fnmruk.jpg" className="d-block w-100 slideImg" alt="objcet not found" />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                   
                </button>
            </div>
        
        </>
    )
}