import React, { useRef, useState } from 'react';
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


export const Menuiserie: React.FC<{}> = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [imageOpen, setImageOpen] = useState('');

  const modalRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

const images = [
  { id: 1, src: a },  
  { id: 2, src: b },
  { id: 3, src: c },
  { id: 4, src: d },
  { id: 5, src: e },
  { id: 6, src: f },
  { id: 7, src: g },
  { id: 8, src: h },
  { id: 9, src: i },
  { id: 10, src: j },
  { id: 11, src: k },
  { id: 12, src: l },
  { id: 13, src: m },
  { id: 14, src: n },
  { id: 15, src: o },
  { id: 16, src: p },
  { id: 17, src: q },
  { id: 19, src: r },
  { id: 20, src: s },
  { id: 21, src: t },
  { id: 22, src: u },
  { id: 23, src: v },
  { id: 24, src: w },
  { id: 25, src: x },
  { id: 26, src: y },
];

function open(src:any){
  setIsOpen(true);
  setImageOpen(src);
}

function close(){
  setIsOpen(false);
  setImageOpen('');
}

return (
<>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4">
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
    </div>
</>
  )
}