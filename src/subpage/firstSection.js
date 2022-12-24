import React, { Component } from "react";
import Slider from "react-slick";

export default class  AutoPlay  extends Component {
    render() {
      var settings = {
        dots: true,
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        cssEase: "linear",
      };
    return(
        <div className='container-fluid MainBg'>
            <div className='container firstSection '>
            <div className='row align-items-center'>
                <div className='col-md-3 firstList' style={{background:'gainsbrow'}} >
                    <div className='row lightText rounded'>
                        <p>Phones & Telecomunication</p>
                        <p>Computer, Offices &Security</p>
                        <p>Automobiles & Motocycles</p>
                        <p>Fashion</p>
                        <p>Gaming</p>
                        <p>Automobile</p>
                        <p>Other Categories</p>
                        <p>Electronics</p>
                        <p>Agriculture</p>
                        <p>Fashion</p>
                    </div>     
                </div>
                <div className=' col-md-6 adjmb col-sm-12 rounded'>
                <Slider {...settings} className="bg bg-white rounded">
                    <div >
                        <img alt="object not found" className='w-100 rounded sidemidImg' src="https://res.cloudinary.com/hamskid/image/upload/v1597840170/ajuaya/Rectangle_4_nggftk.PNG"/>
                    </div>
                    <div>
                         <img alt="object not found" className='w-100  rounded sidemidImg'src="https://ng.jumia.is/cms/0-5-brand-festival/2022/userneed/sliders/sx-ptb_712x384.png"/>
                    </div>
                    <div >
                            <img alt="object not found" className='w-100 rounded  sidemidImg' src="https://ng.jumia.is/cms/0-5-brand-festival/2022/1brand-days/sept-17-bacardi/Slider.png"/>
                    
                    </div>
                    <div >
                            <img alt="object not found" className='w-100 rounded sidemidImg' src="https://ng.jumia.is/cms/0-5-brand-festival/2022/brand-banner/HP/HP.jpg"/>
                    </div>
            
                 </Slider>
                    
                </div>
                <div className='col-md-3'>
                    <div className='row justify-content-between'>
                        <div className='col col-md-12 col-sm-6 shopImg '>
                            <img alt="object not found" className='w-100 sideImg sideTopImg ' src="https://res.cloudinary.com/hamskid/image/upload/v1597840169/ajuaya/Rectangle_6_xym2jz.PNG"/>
                       </div>
                       <div className='col col-md-12 col-sm-6 shopImg2'>
                            <img alt="objcet not found" className='w-100 sideImg' src="https://res.cloudinary.com/hamskid/image/upload/v1597840168/ajuaya/Rectangle_5_ve1h04.PNG"/>
                       </div>
                    </div>

                </div>

            </div>

            </div>
            
        </div>
    )
}




}
