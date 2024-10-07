'use client'

import Image from 'next/image'
import './styles.css'
import { useEffect, useRef, useState } from 'react'
import bg from '../../assets/pattent1.png'
import prj1 from '../../assets/prj1.jpg'
import prj2 from '../../assets/prj2.jpg'
import prj3 from '../../assets/prj3.jpg'
import prj4 from '../../assets/prj4.jpg'
import prj5 from '../../assets/prj5.jpg'
import prj6 from '../../assets/prj6.jpg'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import { GrNext, GrPrevious } from 'react-icons/gr'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export default function PressSection() {
   const swiperRef = useRef(null)

   const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
         {
            breakpoint: 1024,
            settings: {
               slidesToShow: 3,
               slidesToScroll: 1,
               infinite: true,
               dots: false
            }
         },
         {
            breakpoint: 980,
            settings: {
               slidesToShow: 2,
               slidesToScroll: 1,
               initialSlide: 1
            }
         },
         {
            breakpoint: 576,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1
            }
         }
      ]
   }

   return (
      <>
         <div className="press-container">
            <div className="header">
               <div className="h2">
                  <span className="our">OUR</span>
                  <span className="prj">PRESS</span>
               </div>
               <div className="next-prev">
                  <GrPrevious
                     className="prev"
                     onClick={() => swiperRef.current.slickPrev()}
                     size={28}
                  />
                  <GrNext
                     className="next"
                     onClick={() => swiperRef.current.slickNext()}
                     size={28}
                  />
               </div>
            </div>

            <div className="swiper-container">
               {/* <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)} 
            //onSlideChange={handleSlideChange}
            slidesPerView={1}
            spaceBetween={5}
            //centeredSlides={true}
            autoplay={{
               delay: 15000,
               disableOnInteraction: false
            }}
            modules={[Autoplay, Navigation]}
            loop={true}
            breakpoints={{     
               540: {
                  slidesPerView: 1,
                  spaceBetween: 50,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 40,
                },
                980: {
                  slidesPerView: 2,
                  spaceBetween: 50,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 40,
                },
             }}
         >
             <SwiperSlide>
           <div className='item'>
            <a className='img-prj'><Image src={prj1}  alt='img Project'/></a>
            <Image src={bg}  className="bg" alt='bg'/>
            <p className='title'>L'AURORA RESORT - CLUBHOUSE</p>
            </div>
            </SwiperSlide>
            <SwiperSlide>
           <div className='item'>
            <a className='img-prj'><Image src={prj2}  alt='img Project'/></a>
            <Image src={bg}  className="bg" alt='bg'/>
            <p className='title'>L'AURORA RESORT - CLUBHOUSE</p>
            </div>
            </SwiperSlide>
            <SwiperSlide>
           <div className='item'>
            <a className='img-prj'><Image src={prj3}  alt='img Project'/></a>
            <Image src={bg}  className="bg" alt='bg'/>
            <p className='title'>L'AURORA RESORT - CLUBHOUSE</p>
            </div>
            </SwiperSlide>

            <SwiperSlide>
           <div className='item'>
            <a className='img-prj'><Image src={prj4}  alt='img Project'/></a>
            <Image src={bg}  className="bg" alt='bg'/>
            <p className='title'>L'AURORA RESORT - CLUBHOUSE</p>
            </div>
            </SwiperSlide>
            <SwiperSlide>
           <div className='item'>
            <a className='img-prj'><Image src={prj5}  alt='img Project'/></a>
            <Image src={bg}  className="bg" alt='bg'/>
            <p className='title'>L'AURORA RESORT - CLUBHOUSE</p>
            </div>
            </SwiperSlide>
            <SwiperSlide>
           <div className='item'>
            <a className='img-prj'><Image src={prj6}  alt='img Project'/></a>
            <Image src={bg}  className="bg" alt='bg'/>
            <p className='title'>L'AURORA RESORT - CLUBHOUSE</p>
            </div>
            </SwiperSlide>
         </Swiper> */}

               <Slider {...settings} ref={slider => {
               swiperRef.current = slider;
               }}>
                  <div>
                    <div className='m-3'>
                     <div className="item item-press">
                        <a className="img-prj">
                           <Image src={prj1} alt="img Project" />
                        </a>
                        <Image src={bg} className="bg" alt="bg" />
                        <p className="title">L'AURORA RESORT - CLUBHOUSE</p>
                      </div>
                     </div>
                  </div>
                  <div >
                  <div className='m-3'>
                     <div className="item m-1">
                        <a className="img-prj">
                           <Image src={prj1} alt="img Project" />
                        </a>
                        <Image src={bg} className="bg" alt="bg" />
                        <p className="title">L'AURORA RESORT - CLUBHOUSE</p>
                     </div>
                  </div>
                  </div>
                  <div>
                  <div className='m-3'>
                     <div className="item m-1">
                        <a className="img-prj">
                           <Image src={prj1} alt="img Project" />
                        </a>
                        <Image src={bg} className="bg" alt="bg" />
                        <p className="title">L'AURORA RESORT - CLUBHOUSE</p>
                     </div>
                    </div>
                  </div>
               </Slider>
            </div>
         </div>
      </>
   )
}
