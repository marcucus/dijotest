import React from 'react';
import a from '../assets/images/menuiserie/1.jpg';
import c from '../assets/images/menuiserie/3.jpg';
import d from '../assets/images/menuiserie/4.jpg';
import e from '../assets/images/menuiserie/5.jpg';
import f from '../assets/images/menuiserie/6.jpg';
import g from '../assets/images/menuiserie/7.jpg';
import h from '../assets/images/menuiserie/8.jpg';
import i from '../assets/images/menuiserie/9.jpg';
import j from '../assets/images/menuiserie/10.jpg';
import k from '../assets/images/menuiserie/11.jpg';
import { CarouselProvider, ButtonBack, Slider, Slide, ButtonNext } from 'pure-react-carousel';

export const Menuiserie: React.FC<{}> = () => {

const images = [
  { id: 1, src: a  , alt:''},  
  { id: 3, src: c  , alt:''},
  { id: 4, src: d  , alt:''},
  { id: 5, src: e  , alt:''},
  { id: 6, src: f  , alt:''},
  { id: 7, src: g  , alt:''},
  { id: 8, src: h  , alt:''},
  { id: 9, src: i  , alt:''},
  { id: 10, src: j , alt:''},
  { id: 11, src: k , alt:''},
];

return (
<>
<div className="container mx-auto">
  <div className="flex items-center justify-center w-full h-full py-24 sm:py-8 px-4">
      {/* Carousel for desktop and large size devices */}
      <CarouselProvider className="lg:block hidden cursor-grab" naturalSlideHeight={100} naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={11} visibleSlides={3} step={1} infinite={true}>
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
      <CarouselProvider className="lg:hidden md:block hidden cursor-grab" naturalSlideHeight={100} naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={11} visibleSlides={2} step={1} infinite={true}>
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
      <CarouselProvider className="block md:hidden cursor-grab" naturalSlideHeight={100} naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={11} visibleSlides={1} step={1} infinite={true}>
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
  {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4">
      {images.map((image, index) => (
        <img
          key={index}
          src={image.src}
          style={{ objectFit: 'cover', height: '300px' }}
          className="object-cover object-center h-2/6 w-full cursor-pointer"
          alt=''
          onClick={() => open(image.src)}
        />
      ))}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center">
          <div
            className="w-full max-w-lg bg-white rounded-lg shadow-lg overflow-hidden animation-fadeIn"
            ref={modalRef}
          >
            <img src={imageOpen} alt='' className="h-64 w-full object-cover" />
            <button
              className="absolute top-0 right-0 p-3 cursor-pointer"
              onClick={() => close()}
            >
              <svg
                className="fill-current text-gray-600"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                width="24"
                height="24"
              >
                <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div> */}
</>
  )
}