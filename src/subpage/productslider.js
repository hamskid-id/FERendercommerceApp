import React, { Component } from "react";
import Slider from "react-slick";


export default class  AutoPlay  extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 2000,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots:false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2
          }
        }
      ]
    };
    return (
      <div className="container my-3 py-2"style={{background:'ghostwhite'}}>
       
        <Slider {...settings} className="bg bg-white">
          <div className='row align-items-center'>
            <img alt='object not found' src="https://res.cloudinary.com/hamskid/image/upload/v1661256674/reactEccommerce/download_ehp20k.jpg"/>
            <p className="text-center">Fashion</p>
          </div>
          <div className='row align-items-center'>
            <img alt='object not found' src="https://res.cloudinary.com/hamskid/image/upload/v1661256686/reactEccommerce/images_1_loxec1.jpg"/>
            <p className="text-center">Fashion</p>
          </div>
          <div className='row align-items-center'>
            <img alt='object not found' src="https://res.cloudinary.com/hamskid/image/upload/v1661256702/reactEccommerce/images_2_ywwlsv.jpg"/>
            <p className="text-center">Fashion</p>
          </div>
          <div className='row align-items-center'>
            <img alt='object not found' src="https://res.cloudinary.com/hamskid/image/upload/v1661256743/reactEccommerce/images_4_rcb1ij.jpg"/>
            <p className="text-center">Fashion</p>
          </div>
          <div className='row align-items-center'>
            <img alt='object not found' src="https://res.cloudinary.com/hamskid/image/upload/v1661256674/reactEccommerce/download_ehp20k.jpg"/>
            <p className="text-center">Fashion</p>
          </div>
          <div className='row align-items-center'>
            <img alt='object not found' src="https://res.cloudinary.com/hamskid/image/upload/v1661256743/reactEccommerce/images_4_rcb1ij.jpg"/>
            <p className="text-center">Fashion</p>
          </div>
        </Slider>
      </div>
    );
  }
}