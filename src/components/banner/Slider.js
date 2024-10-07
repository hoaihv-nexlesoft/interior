'use client'
import Image from 'next/image'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './styles.css'
import { useEffect, useState } from 'react'
import imgd from '../../assets/01.jpg'
import top1 from '../../assets/top1.png'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import 'swiper/css/pagination'
import banner1 from '../../assets/banner01.png'
import top2 from '../../assets/top02.png'
import banner2 from '../../assets/banner02.jpg'
import top3 from '../../assets/top03.png'
import { PiArrowRightThin } from "react-icons/pi";
import bg from '../../assets/bg-overlay.png'

export default function SliderComponent() {
   const [activeIndex, setActiveIndex] = useState(0)

   const handleSlideChange = (swiper) => {
      setActiveIndex(swiper.activeIndex) // Lưu chỉ số của slide active hiện tại
   }
   const images = [
      {
         i: 'https://kaze.com.vn/multidata/hotel-interior-design-renaissance-riverside-hotel-saigon.jpg'
      }
      //   { i: 'https://kaze.com.vn/multidata/01.jpg' }
   ]

   return (
      <>
      <div className="sliderContainer">
         <Swiper
            onSlideChange={handleSlideChange}
            slidesPerView={1}
            spaceBetween={500}
            centeredSlides={true}
            onSwiper={(swiper) => console.log(swiper)}
            autoplay={{
               delay: 15000,
               disableOnInteraction: false
            }}
            breakpoints={{
               1200: {
                 spaceBetween: 800,
               },
            }}
            modules={[Autoplay, Pagination]}
            pagination={{
               clickable: true
            }}
         >
            <SwiperSlide>
               <div className={`slide slide1`}>
                  <Image
                     src={imgd}
                     className={`img ${activeIndex === 0 ? 'animation' : ''}`}
                     alt="My Image"
                     height={525}
                  />
                  <Image
                     src={top1}
                     className={`img2 ${
                        activeIndex === 0 ? 'overlay-image' : ''
                     }`}
                     alt="My Image"
                  />
                  <Image src={bg} className="bg-overlay" alt="bg" />
                  <div className={`content ${activeIndex === 0 ? 'show' : ''}`}>
                     <span className="span-text">Le Meridien Resort & Spa</span>
                     <a className='a-link'><PiArrowRightThin size={34} /></a>
                     <div
                        className={`line-new ${
                           activeIndex === 0 ? 'line-top' : ''
                        }`}
                     />
                     <div
                        className={`line-new ${
                           activeIndex === 0 ? 'line-right' : ''
                        }`}
                     />
                     <div
                        className={`line-new ${
                           activeIndex === 0 ? 'line-bottom' : ''
                        }`}
                     />
                     <div
                        className={`line-new ${
                           activeIndex === 0 ? 'line-left' : ''
                        }`}
                     />
                  </div>
               </div>
            </SwiperSlide>
            <SwiperSlide>
               <div className={`slide slide1`}>
                  <Image
                     src={banner1}
                     className={`img ${activeIndex === 1 ? 'animation' : ''}`}
                     alt="My Image"
                     height={525}
                  />
                  <Image
                     src={top2}
                     className={`img3 ${
                        activeIndex === 1 ? 'overlay-image' : ''
                     }`}
                     alt="My Image"
                  />
                   <Image src={bg} className="bg-overlay" alt="bg" />
                  <div className={`content ${activeIndex === 1 ? 'show' : ''}`}>
                     <span className="span-text">The Yacht Hotel by DC</span>
                     <a className='a-link'><PiArrowRightThin size={34} /></a>
                     <div
                        className={`line-new ${
                           activeIndex === 1 ? 'line-top' : ''
                        }`}
                     />
                     <div
                        className={`line-new ${
                           activeIndex === 1 ? 'line-right' : ''
                        }`}
                     />
                     <div
                        className={`line-new ${
                           activeIndex === 1 ? 'line-bottom' : ''
                        }`}
                     />
                     <div
                        className={`line-new ${
                           activeIndex === 1 ? 'line-left' : ''
                        }`}
                     />
                  </div>
               </div>
            </SwiperSlide>
            <SwiperSlide>
               <div className={`slide slide1`}>
                  <Image
                     src={banner2}
                     className={`img ${activeIndex === 2 ? 'animation' : ''}`}
                     alt="My Image"
                     height={525}
                  />
                  <Image
                     src={top3}
                     className={`img2 ${
                        activeIndex === 2 ? 'overlay-image' : ''
                     }`}
                     alt="My Image"
                  />
                   <Image src={bg} className="bg-overlay" alt="bg" />
                  <div className={`content ${activeIndex === 2 ? 'show' : ''}`}>
                     <span className="span-text">Anya Premier Hotel Quy Nhon</span>
                     <a className='a-link'><PiArrowRightThin size={34} /></a>
                     <div
                        className={`line-new ${
                           activeIndex === 2 ? 'line-top' : ''
                        }`}
                     />
                     <div
                        className={`line-new ${
                           activeIndex === 2 ? 'line-right' : ''
                        }`}
                     />
                     <div
                        className={`line-new ${
                           activeIndex === 2 ? 'line-bottom' : ''
                        }`}
                     />
                     <div
                        className={`line-new ${
                           activeIndex === 2 ? 'line-left' : ''
                        }`}
                     />
                  </div>
               </div>
            </SwiperSlide>
         </Swiper>
      </div>
      </>
   )
}
