import React from 'react';
import { Slider, Slide, ButtonBack, ButtonNext, CarouselProvider } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import a from '../assets/images/affichage/IMG-20230130-WA0098.jpg';
import b from '../assets/images/affichage/IMG-20230130-WA0101.jpg';
import c from '../assets/images/affichage/1.jpg';
import d from '../assets/images/affichage/2.jpg';
import e from '../assets/images/affichage/3.jpg';
import f from '../assets/images/affichage/4.jpg';
import g from '../assets/images/affichage/5.jpg';
import h from '../assets/images/affichage/6.jpg';
import i from '../assets/images/affichage/7.jpg';
import j from '../assets/images/affichage/8.jpg';
import k from '../assets/images/affichage/9.jpg';
import l from '../assets/images/affichage/10.jpg';
import m from '../assets/images/affichage/11.jpg';
import n from '../assets/images/affichage/12.jpg';
import o from '../assets/images/affichage/13.jpg';
import p from '../assets/images/affichage/14.jpg';
import q from '../assets/images/affichage/15.jpg';
import r from '../assets/images/affichage/16.jpg';
import s from '../assets/images/affichage/17.jpg';
import t from '../assets/images/affichage/18.jpg';
import u from '../assets/images/affichage/19.jpg';
import v from '../assets/images/affichage/20.jpg';
import w from '../assets/images/affichage/21.jpg';
import x from '../assets/images/affichage/22.jpg';
import y from '../assets/images/affichage/23.jpg';


export const Vehicules: React.FC<{}> = () => {

const images = [
  { id: 1,  src: a , alt:''},  
  { id: 2,  src: b , alt:''},
  { id: 3,  src: c , alt:''},
  { id: 4,  src: d , alt:''},
  { id: 5,  src: e , alt:''},
  { id: 6,  src: f , alt:''},
  { id: 7,  src: g , alt:''},
  { id: 8,  src: h , alt:''},
  { id: 9,  src: i , alt:''},
  { id: 10, src: j , alt:''},
  { id: 11, src: k , alt:''},
  { id: 12, src: l , alt:''},
  { id: 13, src: m , alt:''},
  { id: 14, src: n , alt:''},
  { id: 15, src: o , alt:''},
  { id: 16, src: p , alt:''},
  { id: 17, src: q , alt:''},
  { id: 19, src: r , alt:''},
  { id: 20, src: s , alt:''},
  { id: 21, src: t , alt:''},
  { id: 22, src: u , alt:''},
  { id: 23, src: v , alt:''},
  { id: 24, src: w , alt:''},
  { id: 25, src: x , alt:''},
  { id: 26, src: y , alt:''},
];


return (
<>
<div className="container mx-auto">
  <div className="flex items-center justify-center w-full h-full py-24 sm:py-8 px-4">
      {/* Carousel for desktop and large size devices */}
      <CarouselProvider className="lg:block hidden" naturalSlideHeight={100} naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={26} visibleSlides={3} step={1} infinite={true}>
          <div className="w-full relative flex items-center justify-center">
              <ButtonBack role="button" aria-label="slide backward" className="absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer" id="prev">
                  <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7 1L1 7L7 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
              </ButtonBack>
              <div className="h-full mx-auto overflow-x-hidden overflow-y-hidden">
                  <Slider>
                      <div id="slider" className="h-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700">
                          {images.map(image => (
                            <Slide index={image.id} className="w-auto">
                              <div className="flex flex-shrink-0 relative sm:w-auto">
                                  <img src={image.src} alt="black chair and white table" className='object-cover object-center h-2/6 w-full' style={{ objectFit: 'cover', height: '400px'}} />
                                  <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                  </div>
                              </div>
                          </Slide>
                          ))}
                      </div>
                  </Slider>
              </div>
              <ButtonNext role="button" aria-label="slide forward" className="absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400" id="next">
                  <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 1L7 7L1 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
              </ButtonNext>
          </div>
      </CarouselProvider>

      {/* Carousel for tablet and medium size devices */}
      <CarouselProvider className="lg:hidden md:block hidden" naturalSlideHeight={100} naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={26} visibleSlides={2} step={1} infinite={true}>
          <div className="w-full relative flex items-center justify-center">
              <ButtonBack role="button" aria-label="slide backward" className="absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer" id="prev">
                  <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7 1L1 7L7 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
              </ButtonBack>
              <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                  <Slider>
                      <div id="slider" className="h-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700">
                      {images.map(image => (
                          <Slide index={image.id}>
                              <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                  <img src={image.src} alt="black chair and white table" className="object-cover object-center w-full" />
                                  <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                  </div>
                              </div>
                          </Slide>
                      ))}
                      </div>
                  </Slider>
              </div>
              <ButtonNext role="button" aria-label="slide forward" className="absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400" id="next">
                  <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 1L7 7L1 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
              </ButtonNext>
          </div>
      </CarouselProvider>

      {/* Carousel for mobile and Small size Devices */}
      <CarouselProvider className="block md:hidden " naturalSlideHeight={100} naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={26} visibleSlides={1} step={1} infinite={true}>
          <div className="w-full relative flex items-center justify-center">
              <ButtonBack role="button" aria-label="slide backward" className="absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer" id="prev">
                  <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7 1L1 7L7 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
              </ButtonBack>
              <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                  <Slider>
                      <div id="slider" className="h-full w-full flex lg:gap-8 md:gap-6 items-center justify-start transition ease-out duration-700">
                        {images.map(image => (
                          <Slide index={image.id}>
                              <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                  <img src={image.src} alt="black chair and white table" className="object-cover object-center w-full" />
                                  <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                  </div>
                              </div>
                          </Slide>
                        ))}
                      </div>
                  </Slider>
              </div>
              <ButtonNext role="button" aria-label="slide forward" className="absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400" id="next">
                  <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 1L7 7L1 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
              </ButtonNext>
          </div>
      </CarouselProvider>
  </div>
</div>
</>
  )
}